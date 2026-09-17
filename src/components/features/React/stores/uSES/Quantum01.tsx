/** @jsxImportSource react */

import { useLayoutEffect, useSyncExternalStore } from "react";
import { useStore } from "../_models/stores";

export default function USES01() {
	const store01 = useStore('store01');
	const store02 = useStore('store02');
	const store = useSyncExternalStore(store01.subscribe, store01.getSnapshot, store01.getServerSnapshot);

	useLayoutEffect(() => {
		if (!store) return;

		store02.setStore(store);
	}, [ store ]);

	return null;
}
