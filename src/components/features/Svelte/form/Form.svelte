<script lang="ts" generics="T extends object">
	import { tick, untrack } from "svelte";
	import { SvelteURL } from "svelte/reactivity";
	import * as v from "valibot";
	import type { Component } from "svelte";
	import type { FormProps, FormErrors, BindElements, BindElementKey } from "./types";

	type BindElementStatus = { initialValue: unknown, value: unknown, isDirty: boolean, hasInjectedError: boolean };
	type BindElementsStatus = Record<BindElementKey, BindElementStatus>;
	type ScrollTargets = { el: HTMLElement, top: number }[];
	type Props<T> = {
		TargetForm: Component<FormProps<T>>;
		schema: v.GenericSchema<T>;
		initialValues: T;
		initialDirty?: boolean;
		scrollGap?: number;
	};

	const isServer = import.meta.env.SSR;

	const { TargetForm, schema, initialValues, initialDirty = false, scrollGap = 0 }: Props<T> = $props();

	let data = $state<T>(structuredClone(untrack(() => initialValues)));

	const updateStates = <U extends object>(states: U, target: U) => {
		for (const key in states) {
			delete states[key];
		}
		Object.assign(states, target);
	};

	const isCheckable = (el: HTMLElement) => ['checkbox', 'radio'].includes(el.getAttribute('type') ?? '');
	const getElementValue = (el: HTMLElement) => {
		if (isCheckable(el)) {
			return (+('checked' in el && el.checked ? el.checked : false)).toString();
		} else {
			return 'value' in el && el.value ? el.value.toString() : '';
		}
	};

	let bindElements: BindElements = {};
	let bindElementsStatus: BindElementsStatus = {};
	const addElementStatus = (key: BindElementKey, el: HTMLElement) => {
		const value = getElementValue(el);
		if (bindElementsStatus[key]) {
			const mergedValues = `${bindElementsStatus[key].value}${value}`;
			bindElementsStatus[key].initialValue = mergedValues;
			bindElementsStatus[key].value = mergedValues;
		} else {
			bindElementsStatus[key] = { initialValue: value, isDirty: false, value: value, hasInjectedError: false };
		}
	};
	const updateElementsStatus = () => {
		const statuses = Object.entries(bindElementsStatus);
		const dirtyKeys: BindElementKey[] = [];
		const changedKeys: BindElementKey[] = [];
		for (const [key, status] of statuses) {
			if (!bindElements[key]) continue;

			const value = bindElements[key].map(el => getElementValue(el)).join('');
			if (value === status.value) continue;

			if (value !== status.initialValue && !status.isDirty) {
				dirtyKeys.push(key);
				bindElementsStatus[key].isDirty = true;
			} else if (status.isDirty) {
				dirtyKeys.push(key);
			}
			changedKeys.push(key);
			bindElementsStatus[key].value = value;
		}

		return { dirtyKeys, changedKeys };
	};

	const bindElement = (el: HTMLElement) => {
		const key = 'name' in el && el.name ? el.name.toString() : el.dataset.el ?? '';
		if (!key) return;

		if (!bindElements[key]) bindElements[key] = [];
		bindElements[key].push(el);
		addElementStatus(key, el);
	};
	const resetBindElements = () => {
		const elements = Object.values(bindElements);
		bindElements = {};
		bindElementsStatus = {};

		for (const element of elements) {
			const aliveElements = element.filter(el => document.body.contains(el));
			for (const el of aliveElements) {
				bindElement(el);
			}
		}
	};

	type IsDirty = Pick<FormProps<T>, 'isDirty'>['isDirty'];
	const initialIsDirty = () => initialDirty;
	let handledDirty = $state<IsDirty>(initialIsDirty());
	const setDirty = (value: IsDirty = false) => handledDirty = value;
	const isDirty = $derived(handledDirty || JSON.stringify(initialValues) !== JSON.stringify(data));

	const injectedErrors = $state<FormErrors>({});
	const injectErrors = (value: FormErrors) => {
		Object.keys(value).filter(key => bindElementsStatus[key]).forEach(key => {
			bindElementsStatus[key].hasInjectedError = true;
		});
		updateStates(injectedErrors, value);
	}
	const validate = (values: T) => {
		const result = v.safeParse(schema, values);
		if (!isDirty || result.success) return {};

		const issues = v.flatten<typeof schema>(result.issues);
		let receivedErrors: FormErrors = {};
		if (issues.root) receivedErrors._root = issues.root;
		if (issues.nested) receivedErrors = { ...receivedErrors, ...issues.nested };

		return receivedErrors;
	};
	const squeezeErrors = (validationErrors: FormErrors, injectedErrors: FormErrors) => {
		const { dirtyKeys, changedKeys } = updateElementsStatus();
		changedKeys.filter(key => bindElementsStatus[key].hasInjectedError).forEach(key => {
			bindElementsStatus[key].hasInjectedError = false;
		});
		const squeezedInjectedErrors = Object.fromEntries(Object.keys(injectedErrors)
			.filter(key => !dirtyKeys.includes(key) || bindElementsStatus[key].hasInjectedError)
			.map(key => [ key, injectedErrors[key] ]));
		const dirtyErrors = Object.fromEntries(Object.keys(validationErrors).map(key => (
			[ key, bindElementsStatus[key] && bindElementsStatus[key].isDirty ? validationErrors[key] : undefined ]
		)));

		return { ...squeezedInjectedErrors, ...dirtyErrors };
	};
	const buildErrors = (values: T, injectedErrors: FormErrors) => {
		const validationErrors = validate(values);

		return squeezeErrors(validationErrors, injectedErrors);
	};
	const errors = $derived<FormErrors>(buildErrors(data, injectedErrors));
	const errorsTotal = $derived(Object.keys(errors).length);

	type IsSubmitting = Pick<FormProps<T>, 'isSubmitting'>['isSubmitting'];
	let submitting = $state<IsSubmitting>(false);
	const setSubmitting = (value: IsSubmitting = false) => submitting = value;
	const isSubmitting = $derived(submitting);

	const isValid = $derived(errorsTotal === 0);

	const isSubmitDisabled = $derived(!isValid || !isDirty || isSubmitting);

	const scrollByErrors = () => {
		if (isServer) return;
		if (Object.keys(bindElements).length === 0) return;
		if (errorsTotal === 0) return;

		const scrollTargets: ScrollTargets = Object.keys(errors).filter(key => bindElements[key]?.length > 0).map(key => {
			const el = bindElements[key][0];

			return { el: el, top: el.getBoundingClientRect().top };
		});
		if (scrollTargets.length === 0) return;

		scrollTargets.sort((a, b) => a.top - b.top);
		window.scrollTo({ top: scrollTargets[0].top - scrollGap, behavior: 'smooth' });
	};

	const onSubmit = (handler?: () => void | Promise<void>) => async (e: SubmitEvent) => {
		if (!e.currentTarget || !(e.currentTarget instanceof HTMLFormElement) || isServer) return;

		const action = new SvelteURL(e.currentTarget.action);
		const current = new SvelteURL(window.location.href);

		if (action.href === current.href) e.preventDefault();
		if (isSubmitDisabled) return;

		setSubmitting(true);

		try {
			await handler?.();
		} finally {
			setSubmitting();
			scrollByErrors();
		}
	};

	const reset = async () => {
		updateStates(data, structuredClone(initialValues));
		injectErrors({});
		setDirty(initialDirty);
		await tick();
		resetBindElements();
	};
</script>
<TargetForm
	bind:data={ data }
	errors={ errors }
	setErrors={ injectErrors }
	isValid={ isValid }
	isDirty={ isDirty }
	setDirty={ setDirty }
	isSubmitting={ isSubmitting }
	setSubmitting={ setSubmitting }
	isSubmitDisabled={ isSubmitDisabled }
	bindElement={ bindElement }
	onSubmit={ onSubmit }
	reset={ reset }
/>
