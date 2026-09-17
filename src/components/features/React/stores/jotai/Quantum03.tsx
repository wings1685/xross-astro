/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useAtom } from "jotai";
import { useJotaiStore } from "../_models/jotai";

export default function Jotai03() {
	const { store03 } = useJotaiStore('store03');
	const { store04 } = useJotaiStore('store04');
	const [ store ] = useAtom(store03);
	const [ _, setStore ] = useAtom(store04);

	useLayoutEffect(() => {
		if (!store) return;

		setStore(store);
	}, [ store ]);

	return null;
}
