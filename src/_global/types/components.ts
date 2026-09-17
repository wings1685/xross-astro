import type { JSX } from "solid-js";

export type LinkAttributes = JSX.IntrinsicElements['a'];
export type ImageAttributes = JSX.IntrinsicElements['img'];
export type LabelAttributes = JSX.IntrinsicElements['label'];
export type SpanAttributes = JSX.IntrinsicElements['span'];

export type DeepGuard<T> = {
	readonly [K in keyof T]: T[K] extends object
		? DeepGuard<T[K]>
		: T[K];
};
