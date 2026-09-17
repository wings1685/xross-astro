/** @jsxImportSource react */

import { useLayoutEffect, useSyncExternalStore } from "react";
import { useStore } from "../_models/stores";

export default function USES02() {
	const store02 = useStore('store02');
	const store03 = useStore('store03');
	const store = useSyncExternalStore(store02.subscribe, store02.getSnapshot, store02.getServerSnapshot);

	useLayoutEffect(() => {
		if (!store) return;

		store03.setStore(store);
	}, [ store ]);

	return null;
}
