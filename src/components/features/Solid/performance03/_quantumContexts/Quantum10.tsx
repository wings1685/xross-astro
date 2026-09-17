import { createEffect } from "solid-js";
import { useQuantumDataContexts } from "../_models/quantumContext";
import { loopTotal, recordFinished } from "@/_global/lib/performance03";
import { useStore } from "@/_global/piquo";

export default function Quantum10() {
	const { solidSetQuantumContextStart } = useStore('solidQuantum');
	const { setQuantumData01, quantumData10 } = useQuantumDataContexts();

	const incrementContext = (value: number) => {
		setQuantumData01(value + 1);
	};

	createEffect(() => {
		if (!quantumData10()) return;

		if (quantumData10() >= loopTotal) {
			recordFinished('QuantumContext');

			solidSetQuantumContextStart(0);
			return;
		}

		incrementContext(quantumData10());
	});

	return null;
}
