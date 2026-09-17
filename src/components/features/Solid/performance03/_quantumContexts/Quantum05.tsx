import { createEffect } from "solid-js";
import { useQuantumDataContexts } from "../_models/quantumContext";

export default function Quantum05() {
	const { quantumData05, setQuantumData06 } = useQuantumDataContexts();

	createEffect(() => {
		if (!quantumData05()) return;

		setQuantumData06(quantumData05());
	});

	return null;
}
