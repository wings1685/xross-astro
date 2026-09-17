/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useSnapshot } from "valtio";
import { useValtioStore } from "../_models/valtio";

export default function Valtio05() {
	const { store05 } = useValtioStore('store05');
	const { setStore06 } = useValtioStore('store06');
	const store = useSnapshot(store05);

	useLayoutEffect(() => {
		if (!store.store) return;

		setStore06(store.store);
	}, [ store.store ]);

	return null;
}
