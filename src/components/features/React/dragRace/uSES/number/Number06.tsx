/** @jsxImportSource react */

import { useLayoutEffect, useSyncExternalStore } from "react";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function UsesNumber06() {
	const store06 = useReactStore('usesNumber06');
	const storeValue = useSyncExternalStore(store06.subscribe, store06.getSnapshot, store06.getServerSnapshot);
	const store07 = useReactStore('usesNumber07');

	useLayoutEffect(() => {
		if (!storeValue) return;

		store06.set(storeValue + 1);
		if (storeValue === dragRaceMax) {
			store06.set(0);
			store07.set(1);
		}
	}, [ storeValue ]);

	return null;
}
