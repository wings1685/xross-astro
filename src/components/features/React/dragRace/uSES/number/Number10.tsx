/** @jsxImportSource react */

import { useLayoutEffect, useSyncExternalStore } from "react";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax, recordFinished } from "@/_global/lib/dragRace";

export default function UsesNumber10() {
	const store10 = useReactStore('usesNumber10');
	const storeValue = useSyncExternalStore(store10.subscribe, store10.getSnapshot, store10.getServerSnapshot);
	const start = useReactStore('usesStart');

	useLayoutEffect(() => {
		if (!storeValue) return;

		if (storeValue === dragRaceMax) {
			recordFinished('ReactUsesNumber');
			store10.set(0);
			start.set('string');
		} else {
			store10.set(storeValue + 1);
		}
	}, [ storeValue ]);

	return null;
}
