/** @jsxImportSource react */

import { useLayoutEffect, useMemo, useSyncExternalStore } from "react";
import { logStore } from "@/_global/lib/performance04";
import { useStore } from "../_models/stores";

export default function Quantum08() {
	const quantum08 = useStore('quantum08');
	const quantum09 = useStore('quantum09');
	const quantumStore = useSyncExternalStore(quantum08.subscribe, quantum08.getSnapshot, quantum08.getServerSnapshot);

	const relayData = useMemo(() => {
		if (!quantumStore) return 0;

		logStore();
		return quantumStore;
	}, [ quantumStore ]);

	useLayoutEffect(() => {
		if (!relayData) return;

		quantum09.setStore(relayData);
	}, [ relayData ]);

	return null;
}
