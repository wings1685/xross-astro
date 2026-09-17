import { createEffect } from "solid-js";
import { useQuantumDataContexts } from "../_models/quantumContext";

export default function Quantum02() {
	const { quantumData02, setQuantumData03 } = useQuantumDataContexts();

	createEffect(() => {
		if (!quantumData02()) return;

		setQuantumData03(quantumData02());
	});

	return null;
}
