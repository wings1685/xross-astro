/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setStore08 } from "../_models/redux";
import type { RootState } from "../_models/redux";

export default function Redux07() {
	const store = useSelector((state: RootState) => state.store07.value);
	const dispatch = useDispatch();

	useLayoutEffect(() => {
		if (!store) return;

		dispatch(setStore08(store));
	}, [ store ]);

	return null;
}
