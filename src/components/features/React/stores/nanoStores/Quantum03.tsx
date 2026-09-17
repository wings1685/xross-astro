/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useNanoStore } from "../_models/nanoStores";
import { useStore } from "@nanostores/react";

export default function NanoStores03() {
	const { $store03 } = useNanoStore('store03');
	const { $store04 } = useNanoStore('store04');
	const store03 = useStore($store03, { ssr: 'initial' });

	useLayoutEffect(() => {
		if (!store03) return;

		$store04.set(store03);
	}, [ store03 ]);

	return null;
}
