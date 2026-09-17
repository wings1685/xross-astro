/** @jsxImportSource react */

import { useLayoutEffect, useSyncExternalStore } from "react";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function UsesNumber07() {
	const store07 = useReactStore('usesNumber07');
	const storeValue = useSyncExternalStore(store07.subscribe, store07.getSnapshot, store07.getServerSnapshot);
	const store08 = useReactStore('usesNumber08');

	useLayoutEffect(() => {
		if (!storeValue) return;

		store07.set(storeValue + 1);
		if (storeValue === dragRaceMax) {
			store07.set(0);
			store08.set(1);
		}
	}, [ storeValue ]);

	return null;
}
