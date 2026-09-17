/** @jsxImportSource react */

import { useObserve } from "@legendapp/state/react";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function LegendNumber06() {
	const { numberStore06$ } = useReactStore('legendNumber06');
	const { numberStore07$ } = useReactStore('legendNumber07');

	useObserve(() => {
		const value = numberStore06$.get();
		if (!value) return;

		numberStore06$.set(value + 1);
		if (value === dragRaceMax) {
			numberStore06$.set(0);
			numberStore07$.set(1);
		}
	});

	return null;
}
