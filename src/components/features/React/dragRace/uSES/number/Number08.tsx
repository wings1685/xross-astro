/** @jsxImportSource react */

import { useLayoutEffect, useSyncExternalStore } from "react";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function UsesNumber08() {
	const store08 = useReactStore('usesNumber08');
	const storeValue = useSyncExternalStore(store08.subscribe, store08.getSnapshot, store08.getServerSnapshot);
	const store09 = useReactStore('usesNumber09');

	useLayoutEffect(() => {
		if (!storeValue) return;

		store08.set(storeValue + 1);
		if (storeValue === dragRaceMax) {
			store08.set(0);
			store09.set(1);
		}
	}, [ storeValue ]);

	return null;
}
