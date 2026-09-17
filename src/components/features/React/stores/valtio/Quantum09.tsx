/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useSnapshot } from "valtio";
import { useValtioStore } from "../_models/valtio";

export default function Valtio09() {
	const { store09 } = useValtioStore('store09');
	const { setStore10 } = useValtioStore('store10');
	const store = useSnapshot(store09);

	useLayoutEffect(() => {
		if (!store.store) return;

		setStore10(store.store);
	}, [ store.store ]);

	return null;
}
