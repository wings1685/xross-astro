/** @jsxImportSource react */

import { useState } from "react";
import { QuantumContext } from "./_models/quantumContext";
import { Quantum00, Quantum01, Quantum02, Quantum03, Quantum04, Quantum05, Quantum06, Quantum07, Quantum08, Quantum09, Quantum10 } from "./_quantumContexts";

export default function QuantumCircuit() {
	const [ quantumData01, setQuantumData01 ] = useState(0);
	const [ quantumData02, setQuantumData02 ] = useState(0);
	const [ quantumData03, setQuantumData03 ] = useState(0);
	const [ quantumData04, setQuantumData04 ] = useState(0);
	const [ quantumData05, setQuantumData05 ] = useState(0);
	const [ quantumData06, setQuantumData06 ] = useState(0);
	const [ quantumData07, setQuantumData07 ] = useState(0);
	const [ quantumData08, setQuantumData08 ] = useState(0);
	const [ quantumData09, setQuantumData09 ] = useState(0);
	const [ quantumData10, setQuantumData10 ] = useState(0);

	return (
		<QuantumContext value={{
			quantumData01, setQuantumData01,
			quantumData02, setQuantumData02,
			quantumData03, setQuantumData03,
			quantumData04, setQuantumData04,
			quantumData05, setQuantumData05,
			quantumData06, setQuantumData06,
			quantumData07, setQuantumData07,
			quantumData08, setQuantumData08,
			quantumData09, setQuantumData09,
			quantumData10, setQuantumData10,
		}}>
			<Quantum00 />
			<Quantum01 />
			<Quantum02 />
			<Quantum03 />
			<Quantum04 />
			<Quantum05 />
			<Quantum06 />
			<Quantum07 />
			<Quantum08 />
			<Quantum09 />
			<Quantum10 />
		</QuantumContext>
	)
}
