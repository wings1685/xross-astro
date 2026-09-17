/** @jsxImportSource react */

import { useLayoutEffect, useMemo, useSyncExternalStore } from "react";
import { logStore } from "@/_global/lib/performance04";
import { useStore } from "../_models/stores";

export default function Quantum06() {
	const quantum06 = useStore('quantum06');
	const quantum07 = useStore('quantum07');
	const quantumStore = useSyncExternalStore(quantum06.subscribe, quantum06.getSnapshot, quantum06.getServerSnapshot);

	const relayData = useMemo(() => {
		if (!quantumStore) return 0;

		logStore();
		return quantumStore;
	}, [ quantumStore ]);

	useLayoutEffect(() => {
		if (!relayData) return;

		quantum07.setStore(relayData);
	}, [ relayData ]);

	return null;
}
