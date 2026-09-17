/** @jsxImportSource react */

import { useContext, useLayoutEffect, useSyncExternalStore } from "react";
import { QuantumContext } from "../_models/quantumContext";
import { recordStart } from "@/_global/lib/performance03";
import { useStore } from "../_models/stores";

export default function Quantum00() {
	const contextStart = useStore('contextStart');
	const store = useSyncExternalStore(contextStart.subscribe, contextStart.getSnapshot, contextStart.getServerSnapshot);
	const { setQuantumData01 } = useContext(QuantumContext);

	useLayoutEffect(() => {
		if (!store) return;

		recordStart('QuantumContext');
		setQuantumData01(store);
	}, [ store ]);

	return null;
}
