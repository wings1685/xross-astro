/** @jsxImportSource react */

import { useLayoutEffect, useSyncExternalStore } from "react";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function UsesString06() {
	const store06 = useReactStore('usesString06');
	const storeValue = useSyncExternalStore(store06.subscribe, store06.getSnapshot, store06.getServerSnapshot);
	const store07 = useReactStore('usesString07');

	useLayoutEffect(() => {
		const value = +storeValue;
		if (!value) return;

		store06.set((value + 1).toString());
		if (value === dragRaceMax) {
			store06.set('');
			store07.set('1');
		}
	}, [ storeValue ]);

	return null;
}
