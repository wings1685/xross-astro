/** @jsxImportSource react */

import { useObserve } from "@legendapp/state/react";
import { useReactStore } from "../../_models/stores";
import { recordStart, dragRaceMax } from "@/_global/lib/dragRace";

export default function LegendString01() {
	const { startStore$ } = useReactStore('legendStart');
	const { stringStore01$ } = useReactStore('legendString01');
	const { stringStore02$ } = useReactStore('legendString02');

	useObserve(() => {
		if (startStore$.get() !== 'string') return;

		recordStart('ReactLegendString');
		stringStore01$.set('1');
	});

	useObserve(() => {
		const value = +stringStore01$.get();
		if (!value) return;

		stringStore01$.set((value + 1).toString());
		if (value === dragRaceMax) {
			stringStore01$.set('');
			stringStore02$.set('1');
		}
	});

	return null;
}
