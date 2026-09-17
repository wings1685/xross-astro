/** @jsxImportSource react */

import { useObserve } from "@legendapp/state/react";
import { useLegendStore } from "../_models/legendState";

export default function LegendState07() {
	const { store07$ } = useLegendStore('store07');
	const { store08$ } = useLegendStore('store08');

	useObserve(() => {
		if (!store07$.get()) return;

		store08$.set(store07$.get());
	});

	return null;
}
