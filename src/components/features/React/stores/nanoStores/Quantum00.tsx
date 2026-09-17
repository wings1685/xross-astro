/** @jsxImportSource react */

import { useLayoutEffect, useRef, useSyncExternalStore } from "react";
import { recordStart } from "../_models/performance";
import { useStore } from "../_models/stores";
import { useNanoStore } from "../_models/nanoStores";

export default function NanoStores00() {
	const raceStart = useStore('raceStart');
	const start = useSyncExternalStore(raceStart.subscribe, raceStart.getSnapshot, raceStart.getServerSnapshot);
	const { $store01 } = useNanoStore('store01');

	const num = useRef(0);

	useLayoutEffect(() => {
		if (!start) return;

		recordStart('NanoStores');
		num.current++;
		$store01.set(num.current);
	}, [ start ]);

	return null;
}
