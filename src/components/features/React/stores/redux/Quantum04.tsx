/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setStore05 } from "../_models/redux";
import type { RootState } from "../_models/redux";

export default function Redux04() {
	const store = useSelector((state: RootState) => state.store04.value);
	const dispatch = useDispatch();

	useLayoutEffect(() => {
		if (!store) return;

		dispatch(setStore05(store));
	}, [ store ]);

	return null;
}
