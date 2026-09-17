/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useNanoStore } from "../_models/nanoStores";
import { useStore } from "@nanostores/react";

export default function NanoStores01() {
	const { $store01 } = useNanoStore('store01');
	const { $store02 } = useNanoStore('store02');
	const store01 = useStore($store01, { ssr: 'initial' });

	useLayoutEffect(() => {
		if (!store01) return;

		$store02.set(store01);
	}, [ store01 ]);

	return null;
}
