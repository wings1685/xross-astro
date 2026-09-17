/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useSnapshot } from "valtio";
import { useValtioStore } from "../_models/valtio";

export default function Valtio07() {
	const { store07 } = useValtioStore('store07');
	const { setStore08 } = useValtioStore('store08');
	const store = useSnapshot(store07);

	useLayoutEffect(() => {
		if (!store.store) return;

		setStore08(store.store);
	}, [ store.store ]);

	return null;
}
