/** @jsxImportSource react */

import { useObserve } from "@legendapp/state/react";
import { useLegendStore } from "../_models/legendState";

export default function LegendState03() {
	const { store03$ } = useLegendStore('store03');
	const { store04$ } = useLegendStore('store04');

	useObserve(() => {
		if (!store03$.get()) return;

		store04$.set(store03$.get());
	});

	return null;
}
