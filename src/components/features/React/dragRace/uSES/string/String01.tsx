/** @jsxImportSource react */

import { useLayoutEffect, useSyncExternalStore } from "react";
import { useReactStore } from "../../_models/stores";
import { recordStart, dragRaceMax } from "@/_global/lib/dragRace";

export default function UsesString01() {
	const start = useReactStore('usesStart');
	const startStore = useSyncExternalStore(start.subscribe, start.getSnapshot, start.getServerSnapshot);
	const store01 = useReactStore('usesString01');
	const storeValue = useSyncExternalStore(store01.subscribe, store01.getSnapshot, store01.getServerSnapshot);
	const store02 = useReactStore('usesString02');

	useLayoutEffect(() => {
		if (startStore !== 'string') return;

		recordStart('ReactUsesString');
		store01.set('1');
	}, [ startStore ]);

	useLayoutEffect(() => {
		const value = +storeValue;
		if (!value) return;

		store01.set((value + 1).toString());
		if (value === dragRaceMax) {
			store01.set('');
			store02.set('1');
		}
	}, [ storeValue ]);

	return null;
}
