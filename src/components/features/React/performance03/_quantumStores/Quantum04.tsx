/** @jsxImportSource react */

import { useLayoutEffect, useSyncExternalStore } from "react";
import { useStore } from "../_models/stores";

export default function Quantum04() {
	const quantum04 = useStore('quantum04');
	const quantum05 = useStore('quantum05');
	const quantumStore = useSyncExternalStore(quantum04.subscribe, quantum04.getSnapshot, quantum04.getServerSnapshot);

	useLayoutEffect(() => {
		if (!quantumStore) return;

		quantum05.setStore(quantumStore);
	}, [ quantumStore ]);

	return null;
}
