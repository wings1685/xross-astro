/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useZustandStore } from "../_models/zustand";

export default function Zustand06() {
	const { store06 } = useZustandStore('store06');
	const { setStore07 } = useZustandStore('store07');

	useLayoutEffect(() => {
		if (!store06) return;

		setStore07(store06);
	}, [ store06 ]);

	return null;
}
