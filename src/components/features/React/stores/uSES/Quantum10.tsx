/** @jsxImportSource react */

import { useLayoutEffect, useSyncExternalStore } from "react";
import { useStore } from "../_models/stores";
import { recordFinished } from "../_models/performance";

export default function USES10() {
	const store10 = useStore('store10');
	const store = useSyncExternalStore(store10.subscribe, store10.getSnapshot, store10.getServerSnapshot);

	useLayoutEffect(() => {
		if (!store) return;

		recordFinished('uSES');
	}, [ store ]);

	return null;
}
