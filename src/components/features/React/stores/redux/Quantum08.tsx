/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setStore09 } from "../_models/redux";
import type { RootState } from "../_models/redux";

export default function Redux08() {
	const store = useSelector((state: RootState) => state.store08.value);
	const dispatch = useDispatch();

	useLayoutEffect(() => {
		if (!store) return;

		dispatch(setStore09(store));
	}, [ store ]);

	return null;
}
