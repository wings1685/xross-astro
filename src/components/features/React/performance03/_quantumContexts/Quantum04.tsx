/** @jsxImportSource react */

import { useContext, useLayoutEffect } from "react";
import { QuantumContext } from "../_models/quantumContext";

export default function Quantum04() {
	const { quantumData04, setQuantumData05 } = useContext(QuantumContext);

	useLayoutEffect(() => {
		if (!quantumData04) return;

		setQuantumData05(quantumData04);
	}, [ quantumData04 ]);

	return null;
}
