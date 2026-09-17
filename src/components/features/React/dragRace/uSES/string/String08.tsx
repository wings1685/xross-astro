/** @jsxImportSource react */

import { useLayoutEffect, useSyncExternalStore } from "react";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function UsesString08() {
	const store08 = useReactStore('usesString08');
	const storeValue = useSyncExternalStore(store08.subscribe, store08.getSnapshot, store08.getServerSnapshot);
	const store09 = useReactStore('usesString09');

	useLayoutEffect(() => {
		const value = +storeValue;
		if (!value) return;

		store08.set((value + 1).toString());
		if (value === dragRaceMax) {
			store08.set('');
			store09.set('1');
		}
	}, [ storeValue ]);

	return null;
}
