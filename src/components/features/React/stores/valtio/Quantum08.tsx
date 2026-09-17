/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useSnapshot } from "valtio";
import { useValtioStore } from "../_models/valtio";

export default function Valtio08() {
	const { store08 } = useValtioStore('store08');
	const { setStore09 } = useValtioStore('store09');
	const store = useSnapshot(store08);

	useLayoutEffect(() => {
		if (!store.store) return;

		setStore09(store.store);
	}, [ store.store ]);

	return null;
}
