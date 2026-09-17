/** @jsxImportSource react */

import { useLayoutEffect, useSyncExternalStore } from "react";
import { useStore } from "../_models/stores";

export default function USES06() {
	const store06 = useStore('store06');
	const store07 = useStore('store07');
	const store = useSyncExternalStore(store06.subscribe, store06.getSnapshot, store06.getServerSnapshot);

	useLayoutEffect(() => {
		if (!store) return;

		store07.setStore(store);
	}, [ store ]);

	return null;
}
