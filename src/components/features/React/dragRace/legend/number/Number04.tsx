/** @jsxImportSource react */

import { useObserve } from "@legendapp/state/react";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function LegendNumber04() {
	const { numberStore04$ } = useReactStore('legendNumber04');
	const { numberStore05$ } = useReactStore('legendNumber05');

	useObserve(() => {
		const value = numberStore04$.get();
		if (!value) return;

		numberStore04$.set(value + 1);
		if (value === dragRaceMax) {
			numberStore04$.set(0);
			numberStore05$.set(1);
		}
	});

	return null;
}
