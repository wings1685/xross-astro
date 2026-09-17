/** @jsxImportSource react */

import { useObserve } from "@legendapp/state/react";
import { useLegendStore } from "../_models/legendState";

export default function LegendState09() {
	const { store09$ } = useLegendStore('store09');
	const { store10$ } = useLegendStore('store10');

	useObserve(() => {
		if (!store09$.get()) return;

		store10$.set(store09$.get());
	});

	return null;
}
