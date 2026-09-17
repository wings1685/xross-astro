import { createEffect } from "solid-js";
import { loopTotal, recordFinished } from "@/_global/lib/performance03";
import { useStore } from "@/_global/piquo";

export default function Quantum10() {
	const { solidSetQuantumStoreStart, solidSetQuantum01, solidQuantum10 } = useStore('solidQuantum');

	const incrementStore = (value: number) => {
		solidSetQuantum01(value + 1);
	};

	createEffect(() => {
		if (!solidQuantum10()) return;

		if (solidQuantum10() >= loopTotal) {
			recordFinished('QuantumStore');

			solidSetQuantumStoreStart(0);
			return;
		}

		incrementStore(solidQuantum10());
	});

	return null;
}
