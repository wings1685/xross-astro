/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useZustandStore } from "../_models/zustand";

export default function Zustand04() {
	const { store04 } = useZustandStore('store04');
	const { setStore05 } = useZustandStore('store05');

	useLayoutEffect(() => {
		if (!store04) return;

		setStore05(store04);
	}, [ store04 ]);

	return null;
}
