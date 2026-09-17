/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setStore03 } from "../_models/redux";
import type { RootState } from "../_models/redux";

export default function Redux02() {
	const store = useSelector((state: RootState) => state.store02.value);
	const dispatch = useDispatch();

	useLayoutEffect(() => {
		if (!store) return;

		dispatch(setStore03(store));
	}, [ store ]);

	return null;
}
