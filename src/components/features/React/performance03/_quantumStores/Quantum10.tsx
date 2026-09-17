/** @jsxImportSource react */

import { useLayoutEffect, useSyncExternalStore } from "react";
import { useStore } from "../_models/stores";
import { loopTotal, recordFinished } from "@/_global/lib/performance03";

export default function Quantum10() {
	const quantum10 = useStore('quantum10');
	const quantum01 = useStore('quantum01');
	const quantumStart = useStore('quantumStart');
	const quantumStore = useSyncExternalStore(quantum10.subscribe, quantum10.getSnapshot, quantum10.getServerSnapshot);

	const incrementStore = (value: number) => {
		quantum01.setStore(value + 1);
	};

	useLayoutEffect(() => {
		if (!quantumStore) return;

		if (quantumStore >= loopTotal) {
			recordFinished('QuantumStore');

			quantumStart.setStore(0);
			return;
		}

		incrementStore(quantumStore);
	}, [ quantumStore ]);

	return null;
}
