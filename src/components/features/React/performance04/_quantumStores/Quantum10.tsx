/** @jsxImportSource react */

import { useLayoutEffect, useMemo, useSyncExternalStore } from "react";
import { useStore } from "../_models/stores";
import { recordFinished } from "@/_global/lib/performance04";
import { logStore } from "@/_global/lib/performance04";

export default function Quantum10() {
	const quantum10 = useStore('quantum10');
	const quantumStore = useSyncExternalStore(quantum10.subscribe, quantum10.getSnapshot, quantum10.getServerSnapshot);

	const relayData = useMemo(() => {
		if (!quantumStore) return 0;

		logStore();
		return quantumStore;
	}, [ quantumStore ]);

	useLayoutEffect(() => {
		if (!relayData) return;

		recordFinished('Store');
		recordFinished('Race');
	}, [ relayData ]);

	return null;
}
