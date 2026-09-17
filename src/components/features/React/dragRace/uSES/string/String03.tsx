/** @jsxImportSource react */

import { useLayoutEffect, useSyncExternalStore } from "react";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function UsesString03() {
	const store03 = useReactStore('usesString03');
	const storeValue = useSyncExternalStore(store03.subscribe, store03.getSnapshot, store03.getServerSnapshot);
	const store04 = useReactStore('usesString04');

	useLayoutEffect(() => {
		const value = +storeValue;
		if (!value) return;

		store03.set((value + 1).toString());
		if (value === dragRaceMax) {
			store03.set('');
			store04.set('1');
		}
	}, [ storeValue ]);

	return null;
}
