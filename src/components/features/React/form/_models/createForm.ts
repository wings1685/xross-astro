import { useMemo, useRef, useState } from "react";
import * as v from "valibot";

"use client";

type FormErrorValues = string[] | undefined;
export type FormErrors = Record<string, FormErrorValues>;
type BindElementKey = string;
type BindElements = Record<BindElementKey, HTMLElement[]>;
type BindElementStatus = { initialValue: unknown, value: unknown, isDirty: boolean, hasInjectedError: boolean };
type BindElementsStatus = Record<BindElementKey, BindElementStatus>;
type ScrollTargets = { el: HTMLElement, top: number }[];
type Is = boolean;

type CreateFormProps<T> = {
	initialValues: T;
	schema: v.GenericSchema<T>;
	initialDirty?: boolean;
	scrollGap?: number;
};

const isServer = typeof window === 'undefined';

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

	const [ data, setData ] = useState<T>(structuredClone(initialValues));

	const bindElements = useRef<BindElements>({});
	const bindElementsStatus = useRef<BindElementsStatus>({});
	const addElementStatus = (key: BindElementKey, el: HTMLElement) => {
		const value = getElementValue(el);
		if (bindElementsStatus.current[key]) {
			const mergedValues = `${bindElementsStatus.current[key].value}${value}`;
			bindElementsStatus.current[key].initialValue = mergedValues;
			bindElementsStatus.current[key].value = mergedValues;
		} else {
			bindElementsStatus.current[key] = { initialValue: value, isDirty: false, value: value, hasInjectedError: false };
		}
	};
	const updateElementsStatus = () => {
		const statuses = Object.entries(bindElementsStatus.current);
		const dirtyKeys: BindElementKey[] = [];
		const changedKeys: BindElementKey[] = [];
		for (const [key, status] of statuses) {
			if (!bindElements.current[key]) continue;

			const value = bindElements.current[key].map(el => getElementValue(el)).join('');
			if (value === status.value) continue;

			if (value !== status.initialValue && !status.isDirty) {
				dirtyKeys.push(key);
				bindElementsStatus.current[key].isDirty = true;
			} else if (status.isDirty) {
				dirtyKeys.push(key);
			}
			changedKeys.push(key);
			bindElementsStatus.current[key].value = value;
		}

		return { dirtyKeys, changedKeys };
	};

	const bindElement = <T>(el: T) => {
		const element = el as HTMLElement;
		if (!element) return;

		const key = 'name' in element && element.name ? element.name.toString() : element.dataset.el ?? '';
		if (!key) return;

		if (isCheckable(element)) {
			const elements = bindElements.current[key] as HTMLInputElement[];
			const elInput = element as HTMLInputElement;
			if (elements?.find(element => element.value === elInput.value)) return;
		} else {
			if (bindElements.current[key]) return;
		}
		if (!bindElements.current[key]) bindElements.current[key] = [];
		bindElements.current[key].push(element);
		addElementStatus(key, element);
	};
	const resetBindElements = () => {
		bindElements.current = {};
		bindElementsStatus.current = {};
	};

	const handledDirty = useRef<Is>(initialDirty);
	const setDirty = (value: Is = false) => handledDirty.current = value;
	const isDirty = useMemo(() => {
		return !!(handledDirty.current || JSON.stringify(data) !== JSON.stringify(initialValues));
	}, [handledDirty.current, data]);

	const allErrors = useRef<FormErrors>({});
	const errorsTotal = useRef(0);
	const [ injectedErrors, setInjectedErrors ] = useState<FormErrors>({});
	const injectErrors = (values: FormErrors) => {
		Object.keys(values).filter(key => bindElementsStatus.current[key]).forEach(key => {
			bindElementsStatus.current[key].hasInjectedError = true;
		});
		setInjectedErrors(values);
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
		changedKeys.filter(key => bindElementsStatus.current[key].hasInjectedError).forEach(key => {
			bindElementsStatus.current[key].hasInjectedError = false;
		});
		const squeezedInjectedErrors = Object.fromEntries(Object.keys(injectedErrors)
			.filter(key => !dirtyKeys.includes(key) || bindElementsStatus.current[key].hasInjectedError)
			.map(key => [ key, injectedErrors[key] ]));
		const dirtyErrors = Object.fromEntries(Object.keys(validationErrors).map(key => (
			[ key, bindElementsStatus.current[key] && bindElementsStatus.current[key].isDirty ? validationErrors[key] : undefined ]
		)));

		return { ...squeezedInjectedErrors, ...dirtyErrors };
	};
	const buildErrors = (values: T, injectedErrors: FormErrors) => {
		const validationErrors = validate(values);

		return squeezeErrors(validationErrors, injectedErrors);
	};
	const errors = useMemo(() => {
		const builtErrors = buildErrors(data, injectedErrors);
		allErrors.current = builtErrors;
		errorsTotal.current = Object.keys(builtErrors).length;

		return builtErrors;
	}, [data, injectedErrors]);

	const submitting = useRef<Is>(false);
	const setSubmitting = (value: Is = false) => submitting.current = value;
	const isSubmitting = useMemo(() => {
		return submitting.current;
	}, [submitting.current]);

	const isValid = useMemo(() => {
		return errorsTotal.current === 0;
	}, [errorsTotal.current]);

	const isSubmitDisabled = useMemo(() => {
		return !!(!isValid || !isDirty || isSubmitting);
	}, [isValid, isDirty, isSubmitting]);

	const scrollByErrors = () => {
		if (isServer) return;
		if (Object.keys(bindElements.current).length === 0) return;
		if (errorsTotal.current === 0) return;

		const scrollTargets: ScrollTargets = Object.keys(allErrors.current).filter(key => bindElements.current[key]?.length > 0).map(key => {
			const el = bindElements.current[key][0];

			return { el: el, top: el.getBoundingClientRect().top };
		});
		if (scrollTargets.length === 0) return;

		scrollTargets.sort((a, b) => a.top - b.top);
		window.scrollTo({ top: scrollTargets[0].top - scrollGap, behavior: 'smooth' });
	};

	const onSubmit = (handler?: () => void | Promise<void>) => async (e: React.SubmitEvent) => {
		if (!e.currentTarget || !(e.currentTarget instanceof HTMLFormElement) || isServer) return;

		const action = new URL(e.currentTarget.action);
		const current = new URL(window.location.href);

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

	const reset = () => {
		setData(structuredClone(initialValues));
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
