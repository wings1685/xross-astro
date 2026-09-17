/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useZustandStore } from "../_models/zustand";

export default function Zustand01() {
	const { store01 } = useZustandStore('store01');
	const { setStore02 } = useZustandStore('store02');

	useLayoutEffect(() => {
		if (!store01) return;

		setStore02(store01);
	}, [ store01 ]);

	return null;
}
