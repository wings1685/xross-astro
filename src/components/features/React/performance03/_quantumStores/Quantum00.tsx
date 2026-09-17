/** @jsxImportSource react */

import { useLayoutEffect, useSyncExternalStore } from "react";
import { recordStart } from "@/_global/lib/performance03";
import { useStore } from "../_models/stores";

export default function Quantum00() {
	const quantumStart = useStore('quantumStart');
	const quantum01 = useStore('quantum01');
	const quantumStore = useSyncExternalStore(quantumStart.subscribe, quantumStart.getSnapshot, quantumStart.getServerSnapshot);

	useLayoutEffect(() => {
		if (!quantumStore) return;

		recordStart('QuantumStore');
		quantum01.setStore(quantumStore);
	}, [ quantumStore ]);

	return null;
}
