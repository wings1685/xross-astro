/** @jsxImportSource react */

import { useLayoutEffect, useSyncExternalStore } from "react";
import { useReactStore } from "../../_models/stores";
import { recordStart, dragRaceMax } from "@/_global/lib/dragRace";

export default function UsesNumber01() {
	const start = useReactStore('usesStart');
	const startStore = useSyncExternalStore(start.subscribe, start.getSnapshot, start.getServerSnapshot);
	const store01 = useReactStore('usesNumber01');
	const storeValue = useSyncExternalStore(store01.subscribe, store01.getSnapshot, store01.getServerSnapshot);
	const store02 = useReactStore('usesNumber02');

	useLayoutEffect(() => {
		if (startStore !== 'number') return;

		recordStart('ReactUsesNumber');
		store01.set(1);
	}, [ startStore ]);

	useLayoutEffect(() => {
		if (!storeValue) return;

		store01.set(storeValue + 1);
		if (storeValue === dragRaceMax) {
			store01.set(0);
			store02.set(1);
		}
	}, [ storeValue ]);

	return null;
}
