/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useNanoStore } from "../_models/nanoStores";
import { useStore } from "@nanostores/react";

export default function NanoStores07() {
	const { $store07 } = useNanoStore('store07');
	const { $store08 } = useNanoStore('store08');
	const store07 = useStore($store07, { ssr: 'initial' });

	useLayoutEffect(() => {
		if (!store07) return;

		$store08.set(store07);
	}, [ store07 ]);

	return null;
}
