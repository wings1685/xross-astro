/** @jsxImportSource react */

import { useLayoutEffect, useMemo, useSyncExternalStore } from "react";
import { logStore } from "@/_global/lib/performance04";
import { useStore } from "../_models/stores";

export default function Quantum05() {
	const quantum05 = useStore('quantum05');
	const quantum06 = useStore('quantum06');
	const quantumStore = useSyncExternalStore(quantum05.subscribe, quantum05.getSnapshot, quantum05.getServerSnapshot);

	const relayData = useMemo(() => {
		if (!quantumStore) return 0;

		logStore();
		return quantumStore;
	}, [ quantumStore ]);

	useLayoutEffect(() => {
		if (!relayData) return;

		quantum06.setStore(relayData);
	}, [ relayData ]);

	return null;
}
