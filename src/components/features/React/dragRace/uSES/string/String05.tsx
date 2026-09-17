/** @jsxImportSource react */

import { useLayoutEffect, useSyncExternalStore } from "react";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function UsesString05() {
	const store05 = useReactStore('usesString05');
	const storeValue = useSyncExternalStore(store05.subscribe, store05.getSnapshot, store05.getServerSnapshot);
	const store06 = useReactStore('usesString06');

	useLayoutEffect(() => {
		const value = +storeValue;
		if (!value) return;

		store05.set((value + 1).toString());
		if (value === dragRaceMax) {
			store05.set('');
			store06.set('1');
		}
	}, [ storeValue ]);

	return null;
}
