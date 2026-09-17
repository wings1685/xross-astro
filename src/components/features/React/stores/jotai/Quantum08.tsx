/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useAtom } from "jotai";
import { useJotaiStore } from "../_models/jotai";

export default function Jotai08() {
	const { store08 } = useJotaiStore('store08');
	const { store09 } = useJotaiStore('store09');
	const [ store ] = useAtom(store08);
	const [ _, setStore ] = useAtom(store09);

	useLayoutEffect(() => {
		if (!store) return;

		setStore(store);
	}, [ store ]);

	return null;
}
