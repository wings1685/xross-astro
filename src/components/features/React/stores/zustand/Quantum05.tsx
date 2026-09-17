/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useZustandStore } from "../_models/zustand";

export default function Zustand05() {
	const { store05 } = useZustandStore('store05');
	const { setStore06 } = useZustandStore('store06');

	useLayoutEffect(() => {
		if (!store05) return;

		setStore06(store05);
	}, [ store05 ]);

	return null;
}
