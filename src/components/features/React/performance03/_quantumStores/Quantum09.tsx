/** @jsxImportSource react */

import { useLayoutEffect, useSyncExternalStore } from "react";
import { useStore } from "../_models/stores";

export default function Quantum09() {
	const quantum09 = useStore('quantum09');
	const quantum10 = useStore('quantum10');
	const quantumStore = useSyncExternalStore(quantum09.subscribe, quantum09.getSnapshot, quantum09.getServerSnapshot);

	useLayoutEffect(() => {
		if (!quantumStore) return;

		quantum10.setStore(quantumStore);
	}, [ quantumStore ]);

	return null;
}
