/** @jsxImportSource react */

import { useObserve } from "@legendapp/state/react";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function LegendNumber03() {
	const { numberStore03$ } = useReactStore('legendNumber03');
	const { numberStore04$ } = useReactStore('legendNumber04');

	useObserve(() => {
		const value = numberStore03$.get();
		if (!value) return;

		numberStore03$.set(value + 1);
		if (value === dragRaceMax) {
			numberStore03$.set(0);
			numberStore04$.set(1);
		}
	});

	return null;
}
