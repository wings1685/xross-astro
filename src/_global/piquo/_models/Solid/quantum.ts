import { createSignal } from "solid-js";

type Quantum = number;
const initialValue: Quantum = 0;

export const _solidQuantum = {
	server: {
		solidQuantumContextStart: (): Quantum => initialValue,
		solidSetQuantumContextStart: (_: Quantum) => {},
		solidQuantumStoreStart: (): Quantum => initialValue,
		solidSetQuantumStoreStart: (_: Quantum) => {},

		solidQuantum01: (): Quantum => initialValue,
		solidSetQuantum01: (_: Quantum) => {},
		solidQuantum02: (): Quantum => initialValue,
		solidSetQuantum02: (_: Quantum) => {},
		solidQuantum03: (): Quantum => initialValue,
		solidSetQuantum03: (_: Quantum) => {},
		solidQuantum04: (): Quantum => initialValue,
		solidSetQuantum04: (_: Quantum) => {},
		solidQuantum05: (): Quantum => initialValue,
		solidSetQuantum05: (_: Quantum) => {},
		solidQuantum06: (): Quantum => initialValue,
		solidSetQuantum06: (_: Quantum) => {},
		solidQuantum07: (): Quantum => initialValue,
		solidSetQuantum07: (_: Quantum) => {},
		solidQuantum08: (): Quantum => initialValue,
		solidSetQuantum08: (_: Quantum) => {},
		solidQuantum09: (): Quantum => initialValue,
		solidSetQuantum09: (_: Quantum) => {},
		solidQuantum10: (): Quantum => initialValue,
		solidSetQuantum10: (_: Quantum) => {},
	},
	client: () => {
		const [ solidQuantumContextStart, solidSetQuantumContextStart ] = createSignal<Quantum>(initialValue);
		const [ solidQuantumStoreStart, solidSetQuantumStoreStart ] = createSignal<Quantum>(initialValue);

		const [ solidQuantum01, solidSetQuantum01 ] = createSignal<Quantum>(initialValue);
		const [ solidQuantum02, solidSetQuantum02 ] = createSignal<Quantum>(initialValue);
		const [ solidQuantum03, solidSetQuantum03 ] = createSignal<Quantum>(initialValue);
		const [ solidQuantum04, solidSetQuantum04 ] = createSignal<Quantum>(initialValue);
		const [ solidQuantum05, solidSetQuantum05 ] = createSignal<Quantum>(initialValue);
		const [ solidQuantum06, solidSetQuantum06 ] = createSignal<Quantum>(initialValue);
		const [ solidQuantum07, solidSetQuantum07 ] = createSignal<Quantum>(initialValue);
		const [ solidQuantum08, solidSetQuantum08 ] = createSignal<Quantum>(initialValue);
		const [ solidQuantum09, solidSetQuantum09 ] = createSignal<Quantum>(initialValue);
		const [ solidQuantum10, solidSetQuantum10 ] = createSignal<Quantum>(initialValue);

		return {
			solidQuantumContextStart, solidSetQuantumContextStart,
			solidQuantumStoreStart, solidSetQuantumStoreStart,

			solidQuantum01, solidSetQuantum01,
			solidQuantum02, solidSetQuantum02,
			solidQuantum03, solidSetQuantum03,
			solidQuantum04, solidSetQuantum04,
			solidQuantum05, solidSetQuantum05,
			solidQuantum06, solidSetQuantum06,
			solidQuantum07, solidSetQuantum07,
			solidQuantum08, solidSetQuantum08,
			solidQuantum09, solidSetQuantum09,
			solidQuantum10, solidSetQuantum10,
		};
	},
};
