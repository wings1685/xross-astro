/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useZustandStore } from "../_models/zustand";

export default function Zustand08() {
	const { store08 } = useZustandStore('store08');
	const { setStore09 } = useZustandStore('store09');

	useLayoutEffect(() => {
		if (!store08) return;

		setStore09(store08);
	}, [ store08 ]);

	return null;
}
