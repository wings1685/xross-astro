/** @jsxImportSource react */

import { useObserve } from "@legendapp/state/react";
import { useLegendStore } from "../_models/legendState";

export default function LegendState04() {
	const { store04$ } = useLegendStore('store04');
	const { store05$ } = useLegendStore('store05');

	useObserve(() => {
		if (!store04$.get()) return;

		store05$.set(store04$.get());
	});

	return null;
}
