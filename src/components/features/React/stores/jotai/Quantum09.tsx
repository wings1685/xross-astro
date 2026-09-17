/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useAtom } from "jotai";
import { useJotaiStore } from "../_models/jotai";

export default function Jotai09() {
	const { store09 } = useJotaiStore('store09');
	const { store10 } = useJotaiStore('store10');
	const [ store ] = useAtom(store09);
	const [ _, setStore ] = useAtom(store10);

	useLayoutEffect(() => {
		if (!store) return;

		setStore(store);
	}, [ store ]);

	return null;
}
