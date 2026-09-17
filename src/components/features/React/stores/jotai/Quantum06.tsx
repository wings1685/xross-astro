/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useAtom } from "jotai";
import { useJotaiStore } from "../_models/jotai";

export default function Jotai06() {
	const { store06 } = useJotaiStore('store06');
	const { store07 } = useJotaiStore('store07');
	const [ store ] = useAtom(store06);
	const [ _, setStore ] = useAtom(store07);

	useLayoutEffect(() => {
		if (!store) return;

		setStore(store);
	}, [ store ]);

	return null;
}
