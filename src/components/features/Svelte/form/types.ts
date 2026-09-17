import type { Action } from "svelte/action";

export type FormErrorValues = string[] | undefined;
export type FormErrors = Record<string, FormErrorValues>;
export type BindElementKey = string;
export type BindElements = Record<string, HTMLElement[]>;
type Is = boolean;
type SetProps<T> = (value?: T) => void;
export type FormProps<T> = {
	data: T;
	errors: FormErrors;
	setErrors: (errors: FormErrors) => void;
	isValid: Is;
	isDirty: Is;
	setDirty: SetProps<Is>;
	isSubmitting: Is;
	setSubmitting: SetProps<Is>;
	isSubmitDisabled: Is;
	bindElement: Action<HTMLElement>;
	onSubmit: (handler?: () => void | Promise<void>) => (e: SubmitEvent) => Promise<void>;
	reset: () => void;
};
