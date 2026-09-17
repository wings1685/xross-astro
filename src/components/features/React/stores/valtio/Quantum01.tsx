/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useSnapshot } from "valtio";
import { useValtioStore } from "../_models/valtio";

export default function Valtio01() {
	const { store01 } = useValtioStore('store01');
	const { setStore02 } = useValtioStore('store02');
	const store = useSnapshot(store01);

	useLayoutEffect(() => {
		if (!store.store) return;

		setStore02(store.store);
	}, [ store.store ]);

	return null;
}
