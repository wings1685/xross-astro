/** @jsxImportSource react */

import { useObserve } from "@legendapp/state/react";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function LegendString02() {
	const { stringStore02$ } = useReactStore('legendString02');
	const { stringStore03$ } = useReactStore('legendString03');

	useObserve(() => {
		const value = +stringStore02$.get();
		if (!value) return;

		stringStore02$.set((value + 1).toString());
		if (value === dragRaceMax) {
			stringStore02$.set('');
			stringStore03$.set('1');
		}
	});

	return null;
}
