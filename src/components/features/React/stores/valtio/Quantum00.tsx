/** @jsxImportSource react */

import { useLayoutEffect, useRef, useSyncExternalStore } from "react";
import { recordStart } from "../_models/performance";
import { useStore } from "../_models/stores";
import { useValtioStore } from "../_models/valtio";

export default function Valtio00() {
	const raceStart = useStore('raceStart');
	const start = useSyncExternalStore(raceStart.subscribe, raceStart.getSnapshot, raceStart.getServerSnapshot);
	const { setStore01 } = useValtioStore('store01');

	const num = useRef(0);

	useLayoutEffect(() => {
		if (!start) return;

		recordStart('Valtio');
		num.current++;
		setStore01(num.current);
	}, [ start ]);

	return null;
}
