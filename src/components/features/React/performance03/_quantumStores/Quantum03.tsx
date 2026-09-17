/** @jsxImportSource react */

import { useLayoutEffect, useSyncExternalStore } from "react";
import { useStore } from "../_models/stores";

export default function Quantum03() {
	const quantum03 = useStore('quantum03');
	const quantum04 = useStore('quantum04');
	const quantumStore = useSyncExternalStore(quantum03.subscribe, quantum03.getSnapshot, quantum03.getServerSnapshot);

	useLayoutEffect(() => {
		if (!quantumStore) return;

		quantum04.setStore(quantumStore);
	}, [ quantumStore ]);

	return null;
}
