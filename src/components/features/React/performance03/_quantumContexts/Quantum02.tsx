/** @jsxImportSource react */

import { useContext, useLayoutEffect } from "react";
import { QuantumContext } from "../_models/quantumContext";

export default function Quantum02() {
	const { quantumData02, setQuantumData03 } = useContext(QuantumContext);

	useLayoutEffect(() => {
		if (!quantumData02) return;

		setQuantumData03(quantumData02);
	}, [ quantumData02 ]);

	return null;
}
