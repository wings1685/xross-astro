/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useSnapshot } from "valtio";
import { useValtioStore } from "../_models/valtio";

export default function Valtio04() {
	const { store04 } = useValtioStore('store04');
	const { setStore05 } = useValtioStore('store05');
	const store = useSnapshot(store04);

	useLayoutEffect(() => {
		if (!store.store) return;

		setStore05(store.store);
	}, [ store.store ]);

	return null;
}
