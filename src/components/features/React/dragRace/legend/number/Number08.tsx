/** @jsxImportSource react */

import { useObserve } from "@legendapp/state/react";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function LegendNumber08() {
	const { numberStore08$ } = useReactStore('legendNumber08');
	const { numberStore09$ } = useReactStore('legendNumber09');

	useObserve(() => {
		const value = numberStore08$.get();
		if (!value) return;

		numberStore08$.set(value + 1);
		if (value === dragRaceMax) {
			numberStore08$.set(0);
			numberStore09$.set(1);
		}
	});

	return null;
}
