/** @jsxImportSource react */

import { useLayoutEffect, useSyncExternalStore } from "react";
import { useStore } from "../_models/stores";

export default function Quantum01() {
	const quantum01 = useStore('quantum01');
	const quantum02 = useStore('quantum02');
	const quantumStore = useSyncExternalStore(quantum01.subscribe, quantum01.getSnapshot, quantum01.getServerSnapshot);

	useLayoutEffect(() => {
		if (!quantumStore) return;

		quantum02.setStore(quantumStore);
	}, [ quantumStore ]);

	return null;
}
