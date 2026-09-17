/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useZustandStore } from "../_models/zustand";
import { recordFinished } from "../_models/performance";

export default function Zustand10() {
	const { store10 } = useZustandStore('store10');

	useLayoutEffect(() => {
		if (!store10) return;

		recordFinished('Zustand');
	}, [ store10 ]);

	return null;
}
