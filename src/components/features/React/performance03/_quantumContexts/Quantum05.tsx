/** @jsxImportSource react */

import { useContext, useLayoutEffect } from "react";
import { QuantumContext } from "../_models/quantumContext";

export default function Quantum05() {
	const { quantumData05, setQuantumData06 } = useContext(QuantumContext);

	useLayoutEffect(() => {
		if (!quantumData05) return;

		setQuantumData06(quantumData05);
	}, [ quantumData05 ]);

	return null;
}
