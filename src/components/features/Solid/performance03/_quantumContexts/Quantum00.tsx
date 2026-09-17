import { createEffect } from "solid-js";
import { useQuantumDataContexts } from "../_models/quantumContext";
import { useStore } from "@/_global/piquo";
import { recordStart } from "@/_global/lib/performance03";

export default function Quantum00() {
	const { solidQuantumContextStart } = useStore('solidQuantum');
	const { setQuantumData01 } = useQuantumDataContexts();

	createEffect(() => {
		if (!solidQuantumContextStart()) return;

		recordStart('QuantumContext');
		setQuantumData01(solidQuantumContextStart());
	});

	return null;
}
