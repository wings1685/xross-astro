/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setStore10 } from "../_models/redux";
import type { RootState } from "../_models/redux";

export default function Redux09() {
	const store = useSelector((state: RootState) => state.store09.value);
	const dispatch = useDispatch();

	useLayoutEffect(() => {
		if (!store) return;

		dispatch(setStore10(store));
	}, [ store ]);

	return null;
}
