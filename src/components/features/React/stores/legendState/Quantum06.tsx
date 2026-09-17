/** @jsxImportSource react */

import { useObserve } from "@legendapp/state/react";
import { useLegendStore } from "../_models/legendState";

export default function LegendState06() {
	const { store06$ } = useLegendStore('store06');
	const { store07$ } = useLegendStore('store07');

	useObserve(() => {
		if (!store06$.get()) return;

		store07$.set(store06$.get());
	});

	return null;
}
