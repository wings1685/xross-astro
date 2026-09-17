/** @jsxImportSource react */

import { useObserve } from "@legendapp/state/react";
import { recordFinished } from "../_models/performance";
import { useLegendStore } from "../_models/legendState";

export default function LegendState10() {
	const { store10$ } = useLegendStore('store10');

	useObserve(() => {
		if (!store10$.get()) return;

		recordFinished('LegendState');
	});

	return null;
}
