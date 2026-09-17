/** @jsxImportSource react */

import { useLayoutEffect, useSyncExternalStore } from "react";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function UsesString07() {
	const store07 = useReactStore('usesString07');
	const storeValue = useSyncExternalStore(store07.subscribe, store07.getSnapshot, store07.getServerSnapshot);
	const store08 = useReactStore('usesString08');

	useLayoutEffect(() => {
		const value = +storeValue;
		if (!value) return;

		store07.set((value + 1).toString());
		if (value === dragRaceMax) {
			store07.set('');
			store08.set('1');
		}
	}, [ storeValue ]);

	return null;
}
