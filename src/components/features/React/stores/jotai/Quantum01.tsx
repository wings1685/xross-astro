/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useAtom } from "jotai";
import { useJotaiStore } from "../_models/jotai";

export default function Jotai01() {
	const { store01 } = useJotaiStore('store01');
	const { store02 } = useJotaiStore('store02');
	const [ store ] = useAtom(store01);
	const [ _, setStore ] = useAtom(store02);

	useLayoutEffect(() => {
		if (!store) return;

		setStore(store);
	}, [ store ]);

	return null;
}
