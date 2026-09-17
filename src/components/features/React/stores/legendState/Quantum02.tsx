/** @jsxImportSource react */

import { useObserve } from "@legendapp/state/react";
import { useLegendStore } from "../_models/legendState";

export default function LegendState02() {
	const { store02$ } = useLegendStore('store02');
	const { store03$ } = useLegendStore('store03');

	useObserve(() => {
		if (!store02$.get()) return;

		store03$.set(store02$.get());
	});

	return null;
}
