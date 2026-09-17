/** @jsxImportSource react */

import { useLayoutEffect, useRef, useSyncExternalStore } from "react";
import { recordStart } from "../_models/performance";
import { useStore } from "../_models/stores";
import { useLegendStore } from "../_models/legendState";

export default function LegendState00() {
	const raceStart = useStore('raceStart');
	const start = useSyncExternalStore(raceStart.subscribe, raceStart.getSnapshot, raceStart.getServerSnapshot);
	const { store01$ } = useLegendStore('store01');

	const num = useRef(0);

	useLayoutEffect(() => {
		if (!start) return;

		recordStart('LegendState');
		num.current++;
		store01$.set(num.current);
	}, [ start ]);

	return <div></div>;
}
