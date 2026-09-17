/** @jsxImportSource react */

import { useObserve } from "@legendapp/state/react";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax, recordFinished, logTotal } from "@/_global/lib/dragRace";

export default function LegendString10() {
	const { stringStore10$ } = useReactStore('legendString10');
	const { startStore$ } = useReactStore('legendStart');

	useObserve(() => {
		const store = +stringStore10$.get();
		if (!store) return;

		if (store === dragRaceMax) {
			recordFinished('ReactLegendString');
			logTotal('ReactLegend');
			startStore$.set(null);
			stringStore10$.set('');
		} else {
			stringStore10$.set((store + 1).toString());
		}
	});

	return null;
}
