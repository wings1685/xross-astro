/** @jsxImportSource react */

import { useLayoutEffect, useSyncExternalStore } from "react";
import { useStore } from "../_models/stores";

export default function USES03() {
	const store03 = useStore('store03');
	const store04 = useStore('store04');
	const store = useSyncExternalStore(store03.subscribe, store03.getSnapshot, store03.getServerSnapshot);

	useLayoutEffect(() => {
		if (!store) return;

		store04.setStore(store);
	}, [ store ]);

	return null;
}
