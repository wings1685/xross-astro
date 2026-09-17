/** @jsxImportSource react */

import { useObserve } from "@legendapp/state/react";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function LegendString03() {
	const { stringStore03$ } = useReactStore('legendString03');
	const { stringStore04$ } = useReactStore('legendString04');

	useObserve(() => {
		const value = +stringStore03$.get();
		if (!value) return;

		stringStore03$.set((value + 1).toString());
		if (value === dragRaceMax) {
			stringStore03$.set('');
			stringStore04$.set('1');
		}
	});

	return null;
}
