/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useNanoStore } from "../_models/nanoStores";
import { useStore } from "@nanostores/react";

export default function NanoStores09() {
	const { $store09 } = useNanoStore('store09');
	const { $store10 } = useNanoStore('store10');
	const store09 = useStore($store09, { ssr: 'initial' });

	useLayoutEffect(() => {
		if (!store09) return;

		$store10.set(store09);
	}, [ store09 ]);

	return null;
}
