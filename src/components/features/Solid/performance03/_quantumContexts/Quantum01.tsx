import { createEffect } from "solid-js";
import { useQuantumDataContexts } from "../_models/quantumContext";

export default function Quantum01() {
	const { quantumData01, setQuantumData02 } = useQuantumDataContexts();

	createEffect(() => {
		if (!quantumData01()) return;

		setQuantumData02(quantumData01());
	});

	return null;
}
