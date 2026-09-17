/** @jsxImportSource react */

import { useLayoutEffect, useSyncExternalStore } from "react";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function UsesNumber05() {
	const store05 = useReactStore('usesNumber05');
	const storeValue = useSyncExternalStore(store05.subscribe, store05.getSnapshot, store05.getServerSnapshot);
	const store06 = useReactStore('usesNumber06');

	useLayoutEffect(() => {
		if (!storeValue) return;

		store05.set(storeValue + 1);
		if (storeValue === dragRaceMax) {
			store05.set(0);
			store06.set(1);
		}
	}, [ storeValue ]);

	return null;
}
