/** @jsxImportSource react */

import { useLayoutEffect, useSyncExternalStore } from "react";
import { useStore } from "../_models/stores";

export default function Quantum05() {
	const quantum05 = useStore('quantum05');
	const quantum06 = useStore('quantum06');
	const quantumStore = useSyncExternalStore(quantum05.subscribe, quantum05.getSnapshot, quantum05.getServerSnapshot);

	useLayoutEffect(() => {
		if (!quantumStore) return;

		quantum06.setStore(quantumStore);
	}, [ quantumStore ]);

	return null;
}
