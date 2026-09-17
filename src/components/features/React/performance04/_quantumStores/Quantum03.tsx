/** @jsxImportSource react */

import { useLayoutEffect, useMemo, useSyncExternalStore } from "react";
import { logStore } from "@/_global/lib/performance04";
import { useStore } from "../_models/stores";

export default function Quantum03() {
	const quantum03 = useStore('quantum03');
	const quantum04 = useStore('quantum04');
	const quantumStore = useSyncExternalStore(quantum03.subscribe, quantum03.getSnapshot, quantum03.getServerSnapshot);

	const relayData = useMemo(() => {
		if (!quantumStore) return 0;

		logStore();
		return quantumStore;
	}, [ quantumStore ]);

	useLayoutEffect(() => {
		if (!relayData) return;

		quantum04.setStore(relayData);
	}, [ relayData ]);

	return null;
}
