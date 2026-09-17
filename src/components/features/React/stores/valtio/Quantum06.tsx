/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useSnapshot } from "valtio";
import { useValtioStore } from "../_models/valtio";

export default function Valtio06() {
	const { store06 } = useValtioStore('store06');
	const { setStore07 } = useValtioStore('store07');
	const store = useSnapshot(store06);

	useLayoutEffect(() => {
		if (!store.store) return;

		setStore07(store.store);
	}, [ store.store ]);

	return null;
}
