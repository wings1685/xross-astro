/** @jsxImportSource react */

import { useObserve } from "@legendapp/state/react";
import { useLegendStore } from "../_models/legendState";

export default function LegendState05() {
	const { store05$ } = useLegendStore('store05');
	const { store06$ } = useLegendStore('store06');

	useObserve(() => {
		if (!store05$.get()) return;

		store06$.set(store05$.get());
	});

	return null;
}
