/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { recordFinished } from "../_models/performance";
import { useSelector } from "react-redux";
import type { RootState } from "../_models/redux";

export default function Redux10() {
	const store = useSelector((state: RootState) => state.store10.value);

	useLayoutEffect(() => {
		if (!store) return;

		recordFinished('Redux');
	}, [ store ]);

	return null;
}
