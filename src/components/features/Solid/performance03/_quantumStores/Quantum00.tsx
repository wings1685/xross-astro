import { createEffect } from "solid-js";
import { useStore } from "@/_global/piquo";
import { recordStart } from "@/_global/lib/performance03";

export default function Quantum00() {
	const { solidQuantumStoreStart, solidSetQuantum01 } = useStore('solidQuantum');

	createEffect(() => {
		if (!solidQuantumStoreStart()) return;

		recordStart('QuantumStore');
		solidSetQuantum01(solidQuantumStoreStart());
	});

	return null;
}
