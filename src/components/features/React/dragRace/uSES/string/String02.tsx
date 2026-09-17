/** @jsxImportSource react */

import { useLayoutEffect, useSyncExternalStore } from "react";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function UsesString02() {
	const store02 = useReactStore('usesString02');
	const storeValue = useSyncExternalStore(store02.subscribe, store02.getSnapshot, store02.getServerSnapshot);
	const store03 = useReactStore('usesString03');

	useLayoutEffect(() => {
		const value = +storeValue;
		if (!value) return;

		store02.set((value + 1).toString());
		if (value === dragRaceMax) {
			store02.set('');
			store03.set('1');
		}
	}, [ storeValue ]);

	return null;
}
