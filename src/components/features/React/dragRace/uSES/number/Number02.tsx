/** @jsxImportSource react */

import { useLayoutEffect, useSyncExternalStore } from "react";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function UsesNumber02() {
	const store02 = useReactStore('usesNumber02');
	const storeValue = useSyncExternalStore(store02.subscribe, store02.getSnapshot, store02.getServerSnapshot);
	const store03 = useReactStore('usesNumber03');

	useLayoutEffect(() => {
		if (!storeValue) return;

		store02.set(storeValue + 1);
		if (storeValue === dragRaceMax) {
			store02.set(0);
			store03.set(1);
		}
	}, [ storeValue ]);

	return null;
}
