/** @jsxImportSource react */

import { useObserve } from "@legendapp/state/react";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function LegendString09() {
	const { stringStore09$ } = useReactStore('legendString09');
	const { stringStore10$ } = useReactStore('legendString10');

	useObserve(() => {
		const value = +stringStore09$.get();
		if (!value) return;

		stringStore09$.set((value + 1).toString());
		if (value === dragRaceMax) {
			stringStore09$.set('');
			stringStore10$.set('1');
		}
	});

	return null;
}
