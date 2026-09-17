/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { recordFinished } from "../_models/performance";
import { useAtom } from "jotai";
import { useJotaiStore } from "../_models/jotai";

export default function Jotai10() {
	const { store10 } = useJotaiStore('store10');
	const [ store ] = useAtom(store10);

	useLayoutEffect(() => {
		if (!store) return;

		recordFinished('Jotai');
	}, [ store ]);

	return null;
}
