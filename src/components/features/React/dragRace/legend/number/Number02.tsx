/** @jsxImportSource react */

import { useObserve } from "@legendapp/state/react";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function LegendNumber02() {
	const { numberStore02$ } = useReactStore('legendNumber02');
	const { numberStore03$ } = useReactStore('legendNumber03');

	useObserve(() => {
		const value = numberStore02$.get();
		if (!value) return;

		numberStore02$.set(value + 1);
		if (value === dragRaceMax) {
			numberStore02$.set(0);
			numberStore03$.set(1);
		}
	});

	return null;
}
