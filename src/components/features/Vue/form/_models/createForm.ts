import { computed, nextTick, ref } from "vue";
import * as v from "valibot";

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

const isServer = import.meta.env.SSR;

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

	const data = ref<T>(structuredClone(initialValues));

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

	const bindElement = (el: Element) => {
		const element = el as HTMLElement;
		if (!element) return;

		const key = 'name' in element && element.name ? element.name.toString() : element.dataset.el ?? '';
		if (!key) return;

		if (isCheckable(element)) {
			const elements = bindElements[key] as HTMLInputElement[];
			const elInput = element as HTMLInputElement;
			if (elements?.find(element => element.value === elInput.value)) return;
		} else {
			if (bindElements[key]) return;
		}
		if (!bindElements[key]) bindElements[key] = [];
		bindElements[key].push(element);
		addElementStatus(key, element);
	};
	const resetBindElements = () => {
		bindElements = {};
		bindElementsStatus = {};
	};

	const handledDirty = ref<Is>(initialDirty);
	const setDirty = (value: Is = false) => handledDirty.value = value;
	const isDirty = computed(() => handledDirty.value || JSON.stringify(data.value) !== JSON.stringify(initialValues));

	const injectedErrors = ref<FormErrors>({});
	const injectErrors = (values: FormErrors) => {
		Object.keys(values).filter(key => bindElementsStatus[key]).forEach(key => {
			bindElementsStatus[key].hasInjectedError = true;
		});
		injectedErrors.value = values;
	}
	const validate = (values: T) => {
		const result = v.safeParse(schema, values);
		if (!isDirty.value || result.success) return {};

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
	const errors = computed<FormErrors>(() => buildErrors(data.value, injectedErrors.value));
	const errorsTotal = computed(() => Object.keys(errors.value).length);

	const submitting = ref<Is>(false);
	const setSubmitting = (value: Is = false) => submitting.value = value;
	const isSubmitting = computed(() => submitting.value);

	const isValid = computed(() => errorsTotal.value === 0);

	const isSubmitDisabled = computed(() => !isValid.value || !isDirty.value || isSubmitting.value);

	const scrollByErrors = () => {
		if (isServer) return;
		if (Object.keys(bindElements).length === 0) return;
		if (errorsTotal.value === 0) return;

		const scrollTargets: ScrollTargets = Object.keys(errors.value).filter(key => bindElements[key]?.length > 0).map(key => {
			const el = bindElements[key][0];

			return { el: el, top: el.getBoundingClientRect().top };
		});
		if (scrollTargets.length === 0) return;

		scrollTargets.sort((a, b) => a.top - b.top);
		window.scrollTo({ top: scrollTargets[0].top - scrollGap, behavior: 'smooth' });
	};

	const onSubmit = (handler?: () => void | Promise<void>) => async () => {
		if (isSubmitDisabled.value) return;

		setSubmitting(true);

		try {
			await handler?.();
		} finally {
			setSubmitting();
			scrollByErrors();
		}
	};

	const reset = async () => {
		data.value = structuredClone(initialValues);
		injectedErrors.value = {};
		setDirty(initialDirty);
		await nextTick();
		resetBindElements();
	};

	return {
		data,
		errors,
		setErrors: injectErrors,
		isValid,
		isDirty, setDirty,
		isSubmitting, setSubmitting, isSubmitDisabled,
		bindElement,
		reset, onSubmit,
	};
};
