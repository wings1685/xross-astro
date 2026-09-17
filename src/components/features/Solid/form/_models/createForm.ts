import { isServer } from "solid-js/web";
import { createStore, reconcile } from "solid-js/store";
import { createMemo, createSignal } from "solid-js";
import * as v from "valibot";

type FormErrorValues = string[] | undefined;
export type FormErrors = Record<string, FormErrorValues>;
type BindElementKey = string;
type BindElements = Record<BindElementKey, HTMLElement[]>;
type BindElementStatus = { initialValue: unknown, value: unknown, isDirty: boolean, hasInjectedError: boolean };
type BindElementsStatus = Record<BindElementKey, BindElementStatus>;
type ScrollTargets = { el: HTMLElement, top: number }[];

type CreateFormProps<T> = {
	initialValues: T;
	schema: v.GenericSchema<T>;
	initialDirty?: boolean;
	scrollGap?: number;
};

const isCheckable = (el: HTMLElement) => ['checkbox', 'radio'].includes(el.getAttribute('type') ?? '');
const getElementValue = (el: HTMLElement) => {
	if (isCheckable(el)) {
		return (+('checked' in el && el.checked ? el.checked : false)).toString();
	} else {
		return 'value' in el && el.value ? el.value.toString() : '';
	}
};

export const createForm = <T extends object>(props: CreateFormProps<T>) => {
	const { initialValues, schema, initialDirty = false, scrollGap = 0 } = props;

	const [ data, setData ] = createStore<T>(structuredClone(initialValues));

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

	const bindElement = (el: HTMLElement, name?: string) => {
		const key = name ? name : 'name' in el && el.name ? el.name.toString() : el.dataset.el ?? '';
		if (!key) return;

		if (!bindElements[key]) bindElements[key] = [];
		bindElements[key].push(el);
		addElementStatus(key, el);
		console.log(bindElements, bindElementsStatus);
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

	const [ handledDirty, setDirty ] = createSignal(initialDirty);
	const isDirty = createMemo(() => handledDirty() || JSON.stringify(data) !== JSON.stringify(initialValues));

	const [ injectedErrors, setErrors ] = createStore<FormErrors>({});
	const injectErrors = (values: FormErrors) => {
		Object.keys(values).filter(key => bindElementsStatus[key]).forEach(key => {
			bindElementsStatus[key].hasInjectedError = true;
		});
		setErrors(reconcile(values));
	};
	const validate = (values: T) => {
		const result = v.safeParse(schema, values);
		if (!isDirty() || result.success) return {};

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
	const errors = createMemo(() => buildErrors(data, injectedErrors));
	const errorsTotal = createMemo(() => Object.keys(errors()).length);

	const [ isSubmitting, setSubmitting ] = createSignal(false);

	const isValid = createMemo(() => errorsTotal() === 0);

	const isSubmitDisabled = createMemo(() => !isValid() || !isDirty() || isSubmitting());

	const scrollByErrors = () => {
		if (isServer) return;
		if (Object.keys(bindElements).length === 0) return;
		if (errorsTotal() === 0) return;

		const scrollTargets: ScrollTargets = Object.keys(errors()).filter(key => bindElements[key]?.length > 0).map(key => {
			const el = bindElements[key][0];

			return { el: el, top: el.getBoundingClientRect().top };
		});
		if (scrollTargets.length === 0) return;

		scrollTargets.sort((a, b) => a.top - b.top);
		window.scrollTo({ top: scrollTargets[0].top - scrollGap, behavior: 'smooth' });
	};

	const onSubmit = (handler?: () => void | Promise<void>) => async (e: SubmitEvent) => {
		if (!e.currentTarget || !(e.currentTarget instanceof HTMLFormElement) || isServer) return;

		const action = new URL(e.currentTarget.action);
		const current = new URL(window.location.href);

		if (action.href === current.href) e.preventDefault();
		if (isSubmitDisabled()) return;

		setSubmitting(true);

		try {
			await handler?.();
		} finally {
			scrollByErrors();
			setSubmitting(false);
		}
	};

	const reset = () => {
		setData(reconcile(structuredClone(initialValues)));
		injectErrors({});
		setDirty(initialDirty);
		resetBindElements();
	};

	return {
		data, setData,
		errors,
		setErrors: injectErrors,
		isValid,
		isDirty, setDirty,
		isSubmitting, setSubmitting, isSubmitDisabled,
		bindElement,
		reset, onSubmit,
	};
};
