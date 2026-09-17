/** @jsxImportSource react */

import { useContext, useLayoutEffect } from "react";
import { QuantumContext } from "../_models/quantumContext";

export default function Quantum01() {
	const { quantumData01, setQuantumData02 } = useContext(QuantumContext);

	useLayoutEffect(() => {
		if (!quantumData01) return;

		setQuantumData02(quantumData01);
	}, [ quantumData01 ]);

	return null;
}
