/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useNanoStore } from "../_models/nanoStores";
import { useStore } from "@nanostores/react";

export default function NanoStores02() {
	const { $store02 } = useNanoStore('store02');
	const { $store03 } = useNanoStore('store03');
	const store02 = useStore($store02, { ssr: 'initial' });

	useLayoutEffect(() => {
		if (!store02) return;

		$store03.set(store02);
	}, [ store02 ]);

	return null;
}
