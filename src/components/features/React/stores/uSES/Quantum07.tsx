/** @jsxImportSource react */

import { useLayoutEffect, useSyncExternalStore } from "react";
import { useStore } from "../_models/stores";

export default function USES07() {
	const store07 = useStore('store07');
	const store08 = useStore('store08');
	const store = useSyncExternalStore(store07.subscribe, store07.getSnapshot, store07.getServerSnapshot);

	useLayoutEffect(() => {
		if (!store) return;

		store08.setStore(store);
	}, [ store ]);

	return null;
}
