/** @jsxImportSource react */

import { useLayoutEffect, useSyncExternalStore } from "react";
import { useStore } from "../_models/stores";

export default function Quantum08() {
	const quantum08 = useStore('quantum08');
	const quantum09 = useStore('quantum09');
	const quantumStore = useSyncExternalStore(quantum08.subscribe, quantum08.getSnapshot, quantum08.getServerSnapshot);

	useLayoutEffect(() => {
		if (!quantumStore) return;

		quantum09.setStore(quantumStore);
	}, [ quantumStore ]);

	return null;
}
