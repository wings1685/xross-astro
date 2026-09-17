/** @jsxImportSource react */

import { useLayoutEffect, useSyncExternalStore } from "react";
import { useStore } from "../_models/stores";

export default function USES05() {
	const store05 = useStore('store05');
	const store06 = useStore('store06');
	const store = useSyncExternalStore(store05.subscribe, store05.getSnapshot, store05.getServerSnapshot);

	useLayoutEffect(() => {
		if (!store) return;

		store06.setStore(store);
	}, [ store ]);

	return null;
}
