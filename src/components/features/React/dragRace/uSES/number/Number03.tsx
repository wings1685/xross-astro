/** @jsxImportSource react */

import { useLayoutEffect, useSyncExternalStore } from "react";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function UsesNumber03() {
	const store03 = useReactStore('usesNumber03');
	const storeValue = useSyncExternalStore(store03.subscribe, store03.getSnapshot, store03.getServerSnapshot);
	const store04 = useReactStore('usesNumber04');

	useLayoutEffect(() => {
		if (!storeValue) return;

		store03.set(storeValue + 1);
		if (storeValue === dragRaceMax) {
			store03.set(0);
			store04.set(1);
		}
	}, [ storeValue ]);

	return null;
}
