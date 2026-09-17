/** @jsxImportSource react */

import { useLayoutEffect, useMemo, useSyncExternalStore } from "react";
import { logStore } from "@/_global/lib/performance04";
import { useStore } from "../_models/stores";

export default function Quantum09() {
	const quantum09 = useStore('quantum09');
	const quantum10 = useStore('quantum10');
	const quantumStore = useSyncExternalStore(quantum09.subscribe, quantum09.getSnapshot, quantum09.getServerSnapshot);

	const relayData = useMemo(() => {
		if (!quantumStore) return 0;

		logStore();
		return quantumStore;
	}, [ quantumStore ]);

	useLayoutEffect(() => {
		if (!relayData) return;

		quantum10.setStore(relayData);
	}, [ relayData ]);

	return null;
}
