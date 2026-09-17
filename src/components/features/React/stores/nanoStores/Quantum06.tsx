/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useNanoStore } from "../_models/nanoStores";
import { useStore } from "@nanostores/react";

export default function NanoStores06() {
	const { $store06 } = useNanoStore('store06');
	const { $store07 } = useNanoStore('store07');
	const store06 = useStore($store06, { ssr: 'initial' });

	useLayoutEffect(() => {
		if (!store06) return;

		$store07.set(store06);
	}, [ store06 ]);

	return null;
}
