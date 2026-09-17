/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useNanoStore } from "../_models/nanoStores";
import { useStore } from "@nanostores/react";

export default function NanoStores05() {
	const { $store05 } = useNanoStore('store05');
	const { $store06 } = useNanoStore('store06');
	const store05 = useStore($store05, { ssr: 'initial' });

	useLayoutEffect(() => {
		if (!store05) return;

		$store06.set(store05);
	}, [ store05 ]);

	return null;
}
