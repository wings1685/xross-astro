/** @jsxImportSource react */

import { useLayoutEffect, useSyncExternalStore } from "react";
import { useStore } from "../_models/stores";

export default function USES04() {
	const store04 = useStore('store04');
	const store05 = useStore('store05');
	const store = useSyncExternalStore(store04.subscribe, store04.getSnapshot, store04.getServerSnapshot);

	useLayoutEffect(() => {
		if (!store) return;

		store05.setStore(store);
	}, [ store ]);

	return null;
}
