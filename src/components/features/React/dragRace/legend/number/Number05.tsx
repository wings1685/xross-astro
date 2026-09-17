/** @jsxImportSource react */

import { useObserve } from "@legendapp/state/react";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function LegendNumber05() {
	const { numberStore05$ } = useReactStore('legendNumber05');
	const { numberStore06$ } = useReactStore('legendNumber06');

	useObserve(() => {
		const value = numberStore05$.get();
		if (!value) return;

		numberStore05$.set(value + 1);
		if (value === dragRaceMax) {
			numberStore05$.set(0);
			numberStore06$.set(1);
		}
	});

	return null;
}
