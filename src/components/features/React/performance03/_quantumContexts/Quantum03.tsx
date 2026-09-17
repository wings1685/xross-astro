/** @jsxImportSource react */

import { useContext, useLayoutEffect } from "react";
import { QuantumContext } from "../_models/quantumContext";

export default function Quantum03() {
	const { quantumData03, setQuantumData04 } = useContext(QuantumContext);

	useLayoutEffect(() => {
		if (!quantumData03) return;

		setQuantumData04(quantumData03);
	}, [ quantumData03 ]);

	return null;
}
