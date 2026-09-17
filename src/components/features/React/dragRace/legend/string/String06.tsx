/** @jsxImportSource react */

import { useObserve } from "@legendapp/state/react";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function LegendString06() {
	const { stringStore06$ } = useReactStore('legendString06');
	const { stringStore07$ } = useReactStore('legendString07');

	useObserve(() => {
		const value = +stringStore06$.get();
		if (!value) return;

		stringStore06$.set((value + 1).toString());
		if (value === dragRaceMax) {
			stringStore06$.set('');
			stringStore07$.set('1');
		}
	});

	return null;
}
