/** @jsxImportSource react */

import { useObserve } from "@legendapp/state/react";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function LegendNumber07() {
	const { numberStore07$ } = useReactStore('legendNumber07');
	const { numberStore08$ } = useReactStore('legendNumber08');

	useObserve(() => {
		const value = numberStore07$.get();
		if (!value) return;

		numberStore07$.set(value + 1);
		if (value === dragRaceMax) {
			numberStore07$.set(0);
			numberStore08$.set(1);
		}
	});

	return null;
}
