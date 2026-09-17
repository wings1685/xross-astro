/** @jsxImportSource react */

import { useLayoutEffect, useMemo, useSyncExternalStore } from "react";
import { logStore } from "@/_global/lib/performance04";
import { useStore } from "../_models/stores";

export default function Quantum04() {
	const quantum04 = useStore('quantum04');
	const quantum05 = useStore('quantum05');
	const quantumStore = useSyncExternalStore(quantum04.subscribe, quantum04.getSnapshot, quantum04.getServerSnapshot);

	const relayData = useMemo(() => {
		if (!quantumStore) return 0;

		logStore();
		return quantumStore;
	}, [ quantumStore ]);

	useLayoutEffect(() => {
		if (!relayData) return;

		quantum05.setStore(relayData);
	}, [ relayData ]);

	return null;
}
