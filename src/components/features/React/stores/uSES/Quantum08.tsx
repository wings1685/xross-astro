/** @jsxImportSource react */

import { useLayoutEffect, useSyncExternalStore } from "react";
import { useStore } from "../_models/stores";

export default function USES08() {
	const store08 = useStore('store08');
	const store09 = useStore('store09');
	const store = useSyncExternalStore(store08.subscribe, store08.getSnapshot, store08.getServerSnapshot);

	useLayoutEffect(() => {
		if (!store) return;

		store09.setStore(store);
	}, [ store ]);

	return null;
}
