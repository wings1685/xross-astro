/** @jsxImportSource react */

import { useLayoutEffect, useMemo, useSyncExternalStore } from "react";
import { logStore } from "@/_global/lib/performance04";
import { useStore } from "../_models/stores";

export default function Quantum02() {
	const quantum02 = useStore('quantum02');
	const quantum03 = useStore('quantum03');
	const quantumStore = useSyncExternalStore(quantum02.subscribe, quantum02.getSnapshot, quantum02.getServerSnapshot);

	const relayData = useMemo(() => {
		if (!quantumStore) return 0;

		logStore();
		return quantumStore;
	}, [ quantumStore ]);

	useLayoutEffect(() => {
		if (!relayData) return;

		quantum03.setStore(relayData);
	}, [ relayData ]);

	return null;
}
