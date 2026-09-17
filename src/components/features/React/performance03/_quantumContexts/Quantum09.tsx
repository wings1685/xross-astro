/** @jsxImportSource react */

import { useContext, useLayoutEffect } from "react";
import { QuantumContext } from "../_models/quantumContext";

export default function Quantum09() {
	const { quantumData09, setQuantumData10 } = useContext(QuantumContext);

	useLayoutEffect(() => {
		if (!quantumData09) return;

		setQuantumData10(quantumData09);
	}, [ quantumData09 ]);

	return null;
}
