/** @jsxImportSource react */

import { useContext, useLayoutEffect } from "react";
import { QuantumContext } from "../_models/quantumContext";
import { useStore } from "../_models/stores";
import { loopTotal, recordFinished } from "@/_global/lib/performance03";

export default function Quantum10() {
	const { setQuantumData01, quantumData10 } = useContext(QuantumContext);
	const contextStart = useStore('contextStart');

	const incrementContext = (value: number) => {
		setQuantumData01(value + 1);
	};

	useLayoutEffect(() => {
		if (!quantumData10) return;

		if (quantumData10 >= loopTotal) {
			recordFinished('QuantumContext');

			contextStart.setStore(0);
			return;
		}

		incrementContext(quantumData10);
	}, [ quantumData10 ]);

	return null;
}
