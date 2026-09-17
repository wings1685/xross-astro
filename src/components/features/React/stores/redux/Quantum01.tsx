/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setStore02 } from "../_models/redux";
import type { RootState } from "../_models/redux";

export default function Redux01() {
	const store = useSelector((state: RootState) => state.store01.value);
	const dispatch = useDispatch();

	useLayoutEffect(() => {
		if (!store) return;

		dispatch(setStore02(store));
	}, [ store ]);

	return null;
}
