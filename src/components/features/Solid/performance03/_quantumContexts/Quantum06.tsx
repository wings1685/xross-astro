import { createEffect } from "solid-js";
import { useQuantumDataContexts } from "../_models/quantumContext";

export default function Quantum06() {
	const { quantumData06, setQuantumData07 } = useQuantumDataContexts();

	createEffect(() => {
		if (!quantumData06()) return;

		setQuantumData07(quantumData06());
	});

	return null;
}
