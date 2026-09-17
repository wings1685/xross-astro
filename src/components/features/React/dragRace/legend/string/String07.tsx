/** @jsxImportSource react */

import { useObserve } from "@legendapp/state/react";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function LegendString07() {
	const { stringStore07$ } = useReactStore('legendString07');
	const { stringStore08$ } = useReactStore('legendString08');

	useObserve(() => {
		const value = +stringStore07$.get();
		if (!value) return;

		stringStore07$.set((value + 1).toString());
		if (value === dragRaceMax) {
			stringStore07$.set('');
			stringStore08$.set('1');
		}
	});

	return null;
}
