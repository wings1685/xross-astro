/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useZustandStore } from "../_models/zustand";

export default function Zustand07() {
	const { store07 } = useZustandStore('store07');
	const { setStore08 } = useZustandStore('store08');

	useLayoutEffect(() => {
		if (!store07) return;

		setStore08(store07);
	}, [ store07 ]);

	return null;
}
