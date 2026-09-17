/** @jsxImportSource react */

import { useObserve } from "@legendapp/state/react";
import { useLegendStore } from "../_models/legendState";

export default function LegendState01() {
	const { store01$ } = useLegendStore('store01');
	const { store02$ } = useLegendStore('store02');

	useObserve(() => {
		if (!store01$.get()) return;

		store02$.set(store01$.get());
	});

	return null;
}
