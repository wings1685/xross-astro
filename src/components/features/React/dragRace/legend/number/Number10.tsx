/** @jsxImportSource react */

import { useObserve } from "@legendapp/state/react";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax, recordFinished } from "@/_global/lib/dragRace";

export default function LegendNumber10() {
	const { numberStore10$ } = useReactStore('legendNumber10');
	const { startStore$ } = useReactStore('legendStart');

	useObserve(() => {
		const value = numberStore10$.get();
		if (!value) return;

		if (value === dragRaceMax) {
			recordFinished('ReactLegendNumber');
			numberStore10$.set(0);
			startStore$.set('string');
		} else {
			numberStore10$.set(value + 1);
		}
	});

	return null;
}
