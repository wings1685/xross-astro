import { createEffect } from "solid-js";
import { useQuantumDataContexts } from "../_models/quantumContext";

export default function Quantum03() {
	const { quantumData03, setQuantumData04 } = useQuantumDataContexts();

	createEffect(() => {
		if (!quantumData03()) return;

		setQuantumData04(quantumData03());
	});

	return null;
}
