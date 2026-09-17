/** @jsxImportSource react */

import { useLayoutEffect, useSyncExternalStore } from "react";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function UsesString04() {
	const store04 = useReactStore('usesString04');
	const storeValue = useSyncExternalStore(store04.subscribe, store04.getSnapshot, store04.getServerSnapshot);
	const store05 = useReactStore('usesString05');

	useLayoutEffect(() => {
		const value = +storeValue;
		if (!value) return;

		store04.set((value + 1).toString());
		if (value === dragRaceMax) {
			store04.set('');
			store05.set('1');
		}
	}, [ storeValue ]);

	return null;
}
