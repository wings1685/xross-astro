/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useNanoStore } from "../_models/nanoStores";
import { useStore } from "@nanostores/react";

export default function NanoStores08() {
	const { $store08 } = useNanoStore('store08');
	const { $store09 } = useNanoStore('store09');
	const store08 = useStore($store08, { ssr: 'initial' });

	useLayoutEffect(() => {
		if (!store08) return;

		$store09.set(store08);
	}, [ store08 ]);

	return null;
}
