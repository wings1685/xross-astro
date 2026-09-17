/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useAtom } from "jotai";
import { useJotaiStore } from "../_models/jotai";

export default function Jotai05() {
	const { store05 } = useJotaiStore('store05');
	const { store06 } = useJotaiStore('store06');
	const [ store ] = useAtom(store05);
	const [ _, setStore ] = useAtom(store06);

	useLayoutEffect(() => {
		if (!store) return;

		setStore(store);
	}, [ store ]);

	return null;
}
