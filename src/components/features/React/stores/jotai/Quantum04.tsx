/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useAtom } from "jotai";
import { useJotaiStore } from "../_models/jotai";

export default function Jotai04() {
	const { store04 } = useJotaiStore('store04');
	const { store05 } = useJotaiStore('store05');
	const [ store ] = useAtom(store04);
	const [ _, setStore ] = useAtom(store05);

	useLayoutEffect(() => {
		if (!store) return;

		setStore(store);
	}, [ store ]);

	return null;
}
