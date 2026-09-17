/** @jsxImportSource react */

import { useObserve } from "@legendapp/state/react";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function LegendNumber09() {
	const { numberStore09$ } = useReactStore('legendNumber09');
	const { numberStore10$ } = useReactStore('legendNumber10');

	useObserve(() => {
		const value = numberStore09$.get();
		if (!value) return;

		numberStore09$.set(value + 1);
		if (value === dragRaceMax) {
			numberStore09$.set(0);
			numberStore10$.set(1);
		}
	});

	return null;
}
