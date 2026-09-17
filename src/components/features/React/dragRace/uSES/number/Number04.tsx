/** @jsxImportSource react */

import { useLayoutEffect, useSyncExternalStore } from "react";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function UsesNumber04() {
	const store04 = useReactStore('usesNumber04');
	const storeValue = useSyncExternalStore(store04.subscribe, store04.getSnapshot, store04.getServerSnapshot);
	const store05 = useReactStore('usesNumber05');

	useLayoutEffect(() => {
		if (!storeValue) return;

		store04.set(storeValue + 1);
		if (storeValue === dragRaceMax) {
			store04.set(0);
			store05.set(1);
		}
	}, [ storeValue ]);

	return null;
}
