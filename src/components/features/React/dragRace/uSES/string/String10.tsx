/** @jsxImportSource react */

import { useLayoutEffect, useSyncExternalStore } from "react";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax, recordFinished, logTotal } from "@/_global/lib/dragRace";

export default function UsesString10() {
	const store10 = useReactStore('usesString10');
	const storeValue = useSyncExternalStore(store10.subscribe, store10.getSnapshot, store10.getServerSnapshot);
	const start = useReactStore('usesStart');

	useLayoutEffect(() => {
		const value = +storeValue;
		if (!value) return;

		if (value === dragRaceMax) {
			recordFinished('ReactUsesString');
			logTotal('ReactUses');
			start.set(null);
			store10.set('');
		} else {
			store10.set((value + 1).toString());
		}
	}, [ storeValue ]);

	return null;
}
