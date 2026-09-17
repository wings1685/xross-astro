/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setStore04 } from "../_models/redux";
import type { RootState } from "../_models/redux";

export default function Redux03() {
	const store = useSelector((state: RootState) => state.store03.value);
	const dispatch = useDispatch();

	useLayoutEffect(() => {
		if (!store) return;

		dispatch(setStore04(store));
	}, [ store ]);

	return null;
}
