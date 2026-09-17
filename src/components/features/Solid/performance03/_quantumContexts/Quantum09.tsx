import { createEffect } from "solid-js";
import { useQuantumDataContexts } from "../_models/quantumContext";

export default function Quantum09() {
	const { quantumData09, setQuantumData10 } = useQuantumDataContexts();

	createEffect(() => {
		if (!quantumData09()) return;

		setQuantumData10(quantumData09());
	});

	return null;
}
