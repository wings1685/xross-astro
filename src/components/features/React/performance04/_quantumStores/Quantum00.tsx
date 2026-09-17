/** @jsxImportSource react */

import { useLayoutEffect, useRef, useSyncExternalStore } from "react";
import { recordStart } from "@/_global/lib/performance04";
import { useStore } from "../_models/stores";

export default function Quantum00() {
	const raceId = useStore('raceId');
	const quantum01 = useStore('quantum01');
	const raceIdStore = useSyncExternalStore(raceId.subscribe, raceId.getSnapshot, raceId.getServerSnapshot);

	const num = useRef(0);

	useLayoutEffect(() => {
		if (raceIdStore !== 'Store') return;

		recordStart('Store');
		quantum01.setStore(num.current + 1);
		num.current++;
	}, [ raceIdStore ]);

	return null;
}
