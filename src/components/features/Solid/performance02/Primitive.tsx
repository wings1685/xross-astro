import { createEffect, createSignal } from "solid-js";
import { recordFinished, recordStart } from "@/_global/lib/performance02";
import type { ReactiveTypeProps } from "@/_global/types/performance02";

export default function Primitive(props: ReactiveTypeProps) {
	const [ reactive, setReactive ] = createSignal(0);

	createEffect(() => {
		if (!props.start) return;

		recordStart('Primitive');
		setReactive(props.start);
	});

	createEffect(() => {
		if (!reactive()) return;

		recordFinished('Primitive');
	});

	return null;
};
