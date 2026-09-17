/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { recordFinished } from "../_models/performance";
import { useSnapshot } from "valtio";
import { useValtioStore } from "../_models/valtio";

export default function Valtio10() {
	const { store10 } = useValtioStore('store10');
	const store = useSnapshot(store10);

	useLayoutEffect(() => {
		if (!store.store) return;

		recordFinished('Valtio');
	}, [ store.store ]);

	return null;
}
