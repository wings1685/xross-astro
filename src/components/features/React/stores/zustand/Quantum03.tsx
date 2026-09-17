/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useZustandStore } from "../_models/zustand";

export default function Zustand03() {
	const { store03 } = useZustandStore('store03');
	const { setStore04 } = useZustandStore('store04');

	useLayoutEffect(() => {
		if (!store03) return;

		setStore04(store03);
	}, [ store03 ]);

	return null;
}
