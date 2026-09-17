/** @jsxImportSource react */

import { useLayoutEffect, useSyncExternalStore } from "react";
import { useStore } from "../_models/stores";

export default function Quantum02() {
	const quantum02 = useStore('quantum02');
	const quantum03 = useStore('quantum03');
	const quantumStore = useSyncExternalStore(quantum02.subscribe, quantum02.getSnapshot, quantum02.getServerSnapshot);

	useLayoutEffect(() => {
		if (!quantumStore) return;

		quantum03.setStore(quantumStore);
	}, [ quantumStore ]);

	return null;
}
