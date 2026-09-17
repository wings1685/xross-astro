import { QuantumDataProvider } from "./_models/quantumContext";
import { Quantum00, Quantum01, Quantum02, Quantum03, Quantum04, Quantum05, Quantum06, Quantum07, Quantum08, Quantum09, Quantum10 } from "./_quantumContexts";

export default function QuantumCircuit() {
	return (
		<QuantumDataProvider>
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
		</QuantumDataProvider>
	)
}
