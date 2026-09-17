/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useZustandStore } from "../_models/zustand";

export default function Zustand02() {
	const { store02 } = useZustandStore('store02');
	const { setStore03 } = useZustandStore('store03');

	useLayoutEffect(() => {
		if (!store02) return;

		setStore03(store02);
	}, [ store02 ]);

	return null;
}
