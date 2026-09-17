/** @jsxImportSource react */

import { useLayoutEffect, useMemo, useSyncExternalStore } from "react";
import { logStore } from "@/_global/lib/performance04";
import { useStore } from "../_models/stores";

export default function Quantum07() {
	const quantum07 = useStore('quantum07');
	const quantum08 = useStore('quantum08');
	const quantumStore = useSyncExternalStore(quantum07.subscribe, quantum07.getSnapshot, quantum07.getServerSnapshot);

	const relayData = useMemo(() => {
		if (!quantumStore) return 0;

		logStore();
		return quantumStore;
	}, [ quantumStore ]);

	useLayoutEffect(() => {
		if (!relayData) return;

		quantum08.setStore(relayData);
	}, [ relayData ]);

	return null;
}
