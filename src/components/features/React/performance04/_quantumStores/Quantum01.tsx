/** @jsxImportSource react */

import { useLayoutEffect, useMemo, useSyncExternalStore } from "react";
import { logStore } from "@/_global/lib/performance04";
import { useStore } from "../_models/stores";

export default function Quantum01() {
	const quantum01 = useStore('quantum01');
	const quantum02 = useStore('quantum02');
	const quantumStore = useSyncExternalStore(quantum01.subscribe, quantum01.getSnapshot, quantum01.getServerSnapshot);

	const relayData = useMemo(() => {
		if (!quantumStore) return 0;

		logStore();
		return quantumStore;
	}, [ quantumStore ]);

	useLayoutEffect(() => {
		if (!relayData) return;

		quantum02.setStore(relayData);
	}, [ relayData ]);

	return null;
}
