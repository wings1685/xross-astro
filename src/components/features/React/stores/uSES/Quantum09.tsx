/** @jsxImportSource react */

import { useLayoutEffect, useSyncExternalStore } from "react";
import { useStore } from "../_models/stores";

export default function USES09() {
	const store09 = useStore('store09');
	const store10 = useStore('store10');
	const store = useSyncExternalStore(store09.subscribe, store09.getSnapshot, store09.getServerSnapshot);

	useLayoutEffect(() => {
		if (!store) return;

		store10.setStore(store);
	}, [ store ]);

	return null;
}
