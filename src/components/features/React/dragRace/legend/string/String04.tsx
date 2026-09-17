/** @jsxImportSource react */

import { useObserve } from "@legendapp/state/react";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function LegendString04() {
	const { stringStore04$ } = useReactStore('legendString04');
	const { stringStore05$ } = useReactStore('legendString05');

	useObserve(() => {
		const value = +stringStore04$.get();
		if (!value) return;

		stringStore04$.set((value + 1).toString());
		if (value === dragRaceMax) {
			stringStore04$.set('');
			stringStore05$.set('1');
		}
	});

	return null;
}
