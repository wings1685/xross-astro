import { createEffect } from "solid-js";
import { useQuantumDataContexts } from "../_models/quantumContext";

export default function Quantum07() {
	const { quantumData07, setQuantumData08 } = useQuantumDataContexts();

	createEffect(() => {
		if (!quantumData07()) return;

		setQuantumData08(quantumData07());
	});

	return null;
}
