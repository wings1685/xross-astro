/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useSnapshot } from "valtio";
import { useValtioStore } from "../_models/valtio";

export default function Valtio02() {
	const { store02 } = useValtioStore('store02');
	const { setStore03 } = useValtioStore('store03');
	const store = useSnapshot(store02);

	useLayoutEffect(() => {
		if (!store.store) return;

		setStore03(store.store);
	}, [ store.store ]);

	return null;
}
