/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useSnapshot } from "valtio";
import { useValtioStore } from "../_models/valtio";

export default function Valtio03() {
	const { store03 } = useValtioStore('store03');
	const { setStore04 } = useValtioStore('store04');
	const store = useSnapshot(store03);

	useLayoutEffect(() => {
		if (!store.store) return;

		setStore04(store.store);
	}, [ store.store ]);

	return null;
}
