/** @jsxImportSource react */

import { useObserve } from "@legendapp/state/react";
import { useLegendStore } from "../_models/legendState";

export default function LegendState08() {
	const { store08$ } = useLegendStore('store08');
	const { store09$ } = useLegendStore('store09');

	useObserve(() => {
		if (!store08$.get()) return;

		store09$.set(store08$.get());
	});

	return null;
}
