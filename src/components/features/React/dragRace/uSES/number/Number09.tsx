/** @jsxImportSource react */

import { useLayoutEffect, useSyncExternalStore } from "react";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function UsesNumber09() {
	const store09 = useReactStore('usesNumber09');
	const storeValue = useSyncExternalStore(store09.subscribe, store09.getSnapshot, store09.getServerSnapshot);
	const store10 = useReactStore('usesNumber10');

	useLayoutEffect(() => {
		if (!storeValue) return;

		store09.set(storeValue + 1);
		if (storeValue === dragRaceMax) {
			store09.set(0);
			store10.set(1);
		}
	}, [ storeValue ]);

	return null;
}
