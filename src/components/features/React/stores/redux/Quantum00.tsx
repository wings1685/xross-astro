/** @jsxImportSource react */

import { useLayoutEffect, useRef, useSyncExternalStore } from "react";
import { recordStart } from "../_models/performance";
import { useStore } from "../_models/stores";
import { useDispatch } from "react-redux";
import { setStore01 } from "../_models/redux";

export default function Redux00() {
	const raceStart = useStore('raceStart');
	const start = useSyncExternalStore(raceStart.subscribe, raceStart.getSnapshot, raceStart.getServerSnapshot);
	const dispatch = useDispatch();

	const num = useRef(0);

	useLayoutEffect(() => {
		if (!start) return;

		recordStart('Redux');
		num.current++;
		dispatch(setStore01(num.current));
	}, [ start ]);

	return null;
}
