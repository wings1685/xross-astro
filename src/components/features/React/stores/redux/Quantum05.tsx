/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setStore06 } from "../_models/redux";
import type { RootState } from "../_models/redux";

export default function Redux05() {
	const store = useSelector((state: RootState) => state.store05.value);
	const dispatch = useDispatch();

	useLayoutEffect(() => {
		if (!store) return;

		dispatch(setStore06(store));
	}, [ store ]);

	return null;
}
