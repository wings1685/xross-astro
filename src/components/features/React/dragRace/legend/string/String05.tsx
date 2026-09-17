/** @jsxImportSource react */

import { useObserve } from "@legendapp/state/react";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function LegendString05() {
	const { stringStore05$ } = useReactStore('legendString05');
	const { stringStore06$ } = useReactStore('legendString06');

	useObserve(() => {
		const value = +stringStore05$.get();
		if (!value) return;

		stringStore05$.set((value + 1).toString());
		if (value === dragRaceMax) {
			stringStore05$.set('');
			stringStore06$.set('1');
		}
	});

	return null;
}
