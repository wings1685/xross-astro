/** @jsxImportSource react */

import { useContext, useLayoutEffect } from "react";
import { QuantumContext } from "../_models/quantumContext";

export default function Quantum07() {
	const { quantumData07, setQuantumData08 } = useContext(QuantumContext);

	useLayoutEffect(() => {
		if (!quantumData07) return;

		setQuantumData08(quantumData07);
	}, [ quantumData07 ]);

	return null;
}
