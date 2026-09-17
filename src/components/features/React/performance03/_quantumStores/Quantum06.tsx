/** @jsxImportSource react */

import { useLayoutEffect, useSyncExternalStore } from "react";
import { useStore } from "../_models/stores";

export default function Quantum06() {
	const quantum06 = useStore('quantum06');
	const quantum07 = useStore('quantum07');
	const quantumStore = useSyncExternalStore(quantum06.subscribe, quantum06.getSnapshot, quantum06.getServerSnapshot);

	useLayoutEffect(() => {
		if (!quantumStore) return;

		quantum07.setStore(quantumStore);
	}, [ quantumStore ]);

	return null;
}
