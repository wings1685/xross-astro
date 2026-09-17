/** @jsxImportSource react */

import { useLayoutEffect, useRef, useSyncExternalStore } from "react";
import { recordStart } from "../_models/performance";
import { useStore } from "../_models/stores";
import { useZustandStore } from "../_models/zustand";

export default function Zustand00() {
	const raceStart = useStore('raceStart');
	const start = useSyncExternalStore(raceStart.subscribe, raceStart.getSnapshot, raceStart.getServerSnapshot);
	const { setStore01 } = useZustandStore('store01');

	const num = useRef(0);

	useLayoutEffect(() => {
		if (!start) return;

		recordStart('Zustand');
		num.current++;
		setStore01(num.current);
	}, [ start ]);

	return null;
}
