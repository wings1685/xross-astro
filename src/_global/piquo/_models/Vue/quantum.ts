import { ref } from "vue";

type Quantum = number;
const initialValue: Quantum = 0;

export const _vueQuantum = {
	server: {
		vueQuantumContextStart: (): Quantum => initialValue,
		vueSetQuantumContextStart: (_: Quantum) => {},
		vueQuantumStoreStart: (): Quantum => initialValue,
		vueSetQuantumStoreStart: (_: Quantum) => {},

		vueQuantum01: (): Quantum => initialValue,
		vueSetQuantum01: (_: Quantum) => {},
		vueQuantum02: (): Quantum => initialValue,
		vueSetQuantum02: (_: Quantum) => {},
		vueQuantum03: (): Quantum => initialValue,
		vueSetQuantum03: (_: Quantum) => {},
		vueQuantum04: (): Quantum => initialValue,
		vueSetQuantum04: (_: Quantum) => {},
		vueQuantum05: (): Quantum => initialValue,
		vueSetQuantum05: (_: Quantum) => {},
		vueQuantum06: (): Quantum => initialValue,
		vueSetQuantum06: (_: Quantum) => {},
		vueQuantum07: (): Quantum => initialValue,
		vueSetQuantum07: (_: Quantum) => {},
		vueQuantum08: (): Quantum => initialValue,
		vueSetQuantum08: (_: Quantum) => {},
		vueQuantum09: (): Quantum => initialValue,
		vueSetQuantum09: (_: Quantum) => {},
		vueQuantum10: (): Quantum => initialValue,
		vueSetQuantum10: (_: Quantum) => {},
	},
	client: () => {
		const vueQuantumContextStart = ref<Quantum>(initialValue);
		const vueSetQuantumContextStart = (value: Quantum) => { vueQuantumContextStart.value = value; };
		const vueQuantumStoreStart = ref<Quantum>(initialValue);
		const vueSetQuantumStoreStart = (value: Quantum) => { vueQuantumStoreStart.value = value; };

		const vueQuantum01 = ref<Quantum>(initialValue);
		const vueSetQuantum01 = (value: Quantum) => { vueQuantum01.value = value; };
		const vueQuantum02 = ref<Quantum>(initialValue);
		const vueSetQuantum02 = (value: Quantum) => { vueQuantum02.value = value; };
		const vueQuantum03 = ref<Quantum>(initialValue);
		const vueSetQuantum03 = (value: Quantum) => { vueQuantum03.value = value; };
		const vueQuantum04 = ref<Quantum>(initialValue);
		const vueSetQuantum04 = (value: Quantum) => { vueQuantum04.value = value; };
		const vueQuantum05 = ref<Quantum>(initialValue);
		const vueSetQuantum05 = (value: Quantum) => { vueQuantum05.value = value; };
		const vueQuantum06 = ref<Quantum>(initialValue);
		const vueSetQuantum06 = (value: Quantum) => { vueQuantum06.value = value; };
		const vueQuantum07 = ref<Quantum>(initialValue);
		const vueSetQuantum07 = (value: Quantum) => { vueQuantum07.value = value; };
		const vueQuantum08 = ref<Quantum>(initialValue);
		const vueSetQuantum08 = (value: Quantum) => { vueQuantum08.value = value; };
		const vueQuantum09 = ref<Quantum>(initialValue);
		const vueSetQuantum09 = (value: Quantum) => { vueQuantum09.value = value; };
		const vueQuantum10 = ref<Quantum>(initialValue);
		const vueSetQuantum10 = (value: Quantum) => { vueQuantum10.value = value; };

		return {
			vueQuantumContextStart: () => vueQuantumContextStart.value, vueSetQuantumContextStart,
			vueQuantumStoreStart: () => vueQuantumStoreStart.value, vueSetQuantumStoreStart,

			vueQuantum01: () => vueQuantum01.value, vueSetQuantum01,
			vueQuantum02: () => vueQuantum02.value, vueSetQuantum02,
			vueQuantum03: () => vueQuantum03.value, vueSetQuantum03,
			vueQuantum04: () => vueQuantum04.value, vueSetQuantum04,
			vueQuantum05: () => vueQuantum05.value, vueSetQuantum05,
			vueQuantum06: () => vueQuantum06.value, vueSetQuantum06,
			vueQuantum07: () => vueQuantum07.value, vueSetQuantum07,
			vueQuantum08: () => vueQuantum08.value, vueSetQuantum08,
			vueQuantum09: () => vueQuantum09.value, vueSetQuantum09,
			vueQuantum10: () => vueQuantum10.value, vueSetQuantum10,
		};
	},
};
