import { createEffect } from "solid-js";
import { useQuantumDataContexts } from "../_models/quantumContext";

export default function Quantum08() {
	const { quantumData08, setQuantumData09 } = useQuantumDataContexts();

	createEffect(() => {
		if (!quantumData08()) return;

		setQuantumData09(quantumData08());
	});

	return null;
}
