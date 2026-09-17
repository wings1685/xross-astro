/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useNanoStore } from "../_models/nanoStores";
import { useStore } from "@nanostores/react";

export default function NanoStores04() {
	const { $store04 } = useNanoStore('store04');
	const { $store05 } = useNanoStore('store05');
	const store04 = useStore($store04, { ssr: 'initial' });

	useLayoutEffect(() => {
		if (!store04) return;

		$store05.set(store04);
	}, [ store04 ]);

	return null;
}
