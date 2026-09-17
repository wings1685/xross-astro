/** @jsxImportSource react */

import { useLayoutEffect, useRef, useSyncExternalStore } from "react";
import { recordStart } from "../_models/performance";
import { useStore } from "../_models/stores";

export default function USES00() {
	const raceStart = useStore('raceStart');
	const store01 = useStore('store01');
	const start = useSyncExternalStore(raceStart.subscribe, raceStart.getSnapshot, raceStart.getServerSnapshot);

	const num = useRef(0);

	useLayoutEffect(() => {
		if (!start) return;

		recordStart('uSES');
		num.current++;
		store01.setStore(num.current);
	}, [ start ]);

	return null;
}
