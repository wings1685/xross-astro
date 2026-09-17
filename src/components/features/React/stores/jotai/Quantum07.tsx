/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useAtom } from "jotai";
import { useJotaiStore } from "../_models/jotai";

export default function Jotai07() {
	const { store07 } = useJotaiStore('store07');
	const { store08 } = useJotaiStore('store08');
	const [ store ] = useAtom(store07);
	const [ _, setStore ] = useAtom(store08);

	useLayoutEffect(() => {
		if (!store) return;

		setStore(store);
	}, [ store ]);

	return null;
}
