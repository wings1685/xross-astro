/** @jsxImportSource react */

import { useLayoutEffect, useSyncExternalStore } from "react";
import { useStore } from "../_models/stores";

export default function Quantum07() {
	const quantum07 = useStore('quantum07');
	const quantum08 = useStore('quantum08');
	const quantumStore = useSyncExternalStore(quantum07.subscribe, quantum07.getSnapshot, quantum07.getServerSnapshot);

	useLayoutEffect(() => {
		if (!quantumStore) return;

		quantum08.setStore(quantumStore);
	}, [ quantumStore ]);

	return null;
}
