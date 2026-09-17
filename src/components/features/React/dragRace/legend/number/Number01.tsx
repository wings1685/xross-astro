/** @jsxImportSource react */

import { useObserve } from "@legendapp/state/react";
import { useReactStore } from "../../_models/stores";
import { recordStart, dragRaceMax } from "@/_global/lib/dragRace";

export default function LegendNumber01() {
	const { startStore$ } = useReactStore('legendStart');
	const { numberStore01$ } = useReactStore('legendNumber01');
	const { numberStore02$ } = useReactStore('legendNumber02');

	useObserve(() => {
		if (startStore$.get() !== 'number') return;

		recordStart('ReactLegendNumber');
		numberStore01$.set(1);
	});

	useObserve(() => {
		const value = numberStore01$.get();
		if (!value) return;

		numberStore01$.set(value + 1);
		if (value === dragRaceMax) {
			numberStore01$.set(0);
			numberStore02$.set(1);
		}
	});

	return null;
}
