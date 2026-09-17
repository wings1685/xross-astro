/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useAtom } from "jotai";
import { useJotaiStore } from "../_models/jotai";

export default function Jotai02() {
	const { store02 } = useJotaiStore('store02');
	const { store03 } = useJotaiStore('store03');
	const [ store ] = useAtom(store02);
	const [ _, setStore ] = useAtom(store03);

	useLayoutEffect(() => {
		if (!store) return;

		setStore(store);
	}, [ store ]);

	return null;
}
