/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setStore07 } from "../_models/redux";
import type { RootState } from "../_models/redux";

export default function Redux06() {
	const store = useSelector((state: RootState) => state.store06.value);
	const dispatch = useDispatch();

	useLayoutEffect(() => {
		if (!store) return;

		dispatch(setStore07(store));
	}, [ store ]);

	return null;
}
