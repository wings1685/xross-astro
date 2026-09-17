/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { recordFinished } from "../_models/performance";
import { useNanoStore } from "../_models/nanoStores";
import { useStore } from "@nanostores/react";

export default function NanoStores10() {
	const { $store10 } = useNanoStore('store10');
	const store10 = useStore($store10, { ssr: 'initial' });

	useLayoutEffect(() => {
		if (!store10) return;

		recordFinished('NanoStores');
	}, [ store10 ]);

	return null;
}
