import { createEffect } from "solid-js";
import { useQuantumDataContexts } from "../_models/quantumContext";

export default function Quantum04() {
	const { quantumData04, setQuantumData05 } = useQuantumDataContexts();

	createEffect(() => {
		if (!quantumData04()) return;

		setQuantumData05(quantumData04());
	});

	return null;
}
