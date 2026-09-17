import { createEffect } from "solid-js";
import { useStore } from "@/_global/piquo";
import { recordFinished, recordStart } from "@/_global/lib/performance01";

type Props = {
	id: string;
};

export default function At(props: Props) {
	const { solidAtId, solidSetAtId } = useStore('solidAtId');

	let el: HTMLSpanElement | undefined;

	createEffect(() => {
		if (!el || props.id !== solidAtId()) return;

		el.scrollIntoView({ behavior: 'smooth' });
		recordFinished('GlobalSignal');
		solidSetAtId('');
		recordStart('Hydration');
	});

	return (
		<span ref={ el } id={ `at_${props.id}` } class="invisible_target" />
	)
}
