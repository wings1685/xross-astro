/** @jsxImportSource react */

import { useLayoutEffect, useRef, useSyncExternalStore } from "react";
import { recordStart } from "../_models/performance";
import { useStore } from "../_models/stores";
import { useAtom } from "jotai";
import { useJotaiStore } from "../_models/jotai";

export default function Jotai00() {
	const raceStart = useStore('raceStart');
	const start = useSyncExternalStore(raceStart.subscribe, raceStart.getSnapshot, raceStart.getServerSnapshot);
	const { store01 } = useJotaiStore('store01');
	const [ _, setStore ] = useAtom(store01);

	const num = useRef(0);

	useLayoutEffect(() => {
		if (!start) return;

		recordStart('Jotai');
		num.current++;
		setStore(num.current);
	}, [ start ]);

	return null;
}
