/** @jsxImportSource react */

import { useLayoutEffect, useSyncExternalStore } from "react";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function UsesString09() {
	const store09 = useReactStore('usesString09');
	const storeValue = useSyncExternalStore(store09.subscribe, store09.getSnapshot, store09.getServerSnapshot);
	const store10 = useReactStore('usesString10');

	useLayoutEffect(() => {
		const value = +storeValue;
		if (!value) return;

		store09.set((value + 1).toString());
		if (value === dragRaceMax) {
			store09.set('');
			store10.set('1');
		}
	}, [ storeValue ]);

	return null;
}
