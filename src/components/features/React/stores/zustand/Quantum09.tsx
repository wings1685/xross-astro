/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useZustandStore } from "../_models/zustand";

export default function Zustand09() {
	const { store09 } = useZustandStore('store09');
	const { setStore10 } = useZustandStore('store10');

	useLayoutEffect(() => {
		if (!store09) return;

		setStore10(store09);
	}, [ store09 ]);

	return null;
}
