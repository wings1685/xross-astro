/** @jsxImportSource react */

import { useObserve } from "@legendapp/state/react";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function LegendString08() {
	const { stringStore08$ } = useReactStore('legendString08');
	const { stringStore09$ } = useReactStore('legendString09');

	useObserve(() => {
		const value = +stringStore08$.get();
		if (!value) return;

		stringStore08$.set((value + 1).toString());
		if (value === dragRaceMax) {
			stringStore08$.set('');
			stringStore09$.set('1');
		}
	});

	return null;
}
