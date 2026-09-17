/** @jsxImportSource react */

import { useContext, useLayoutEffect } from "react";
import { QuantumContext } from "../_models/quantumContext";

export default function Quantum08() {
	const { quantumData08, setQuantumData09 } = useContext(QuantumContext);

	useLayoutEffect(() => {
		if (!quantumData08) return;

		setQuantumData09(quantumData08);
	}, [ quantumData08 ]);

	return null;
}
