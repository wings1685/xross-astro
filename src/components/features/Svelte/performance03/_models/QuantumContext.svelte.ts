import { createContext } from "svelte";

const createQuantumDataContexts = () => {
	const states = $state({
		quantumData01: 0,
		quantumData02: 0,
		quantumData03: 0,
		quantumData04: 0,
		quantumData05: 0,
		quantumData06: 0,
		quantumData07: 0,
		quantumData08: 0,
		quantumData09: 0,
		quantumData10: 0,
	});
	type States = typeof states;

	return {
		quantumData01: () => states.quantumData01,
		setQuantumData01: (value: States['quantumData01'] = 0) => states.quantumData01 = value,
		quantumData02: () => states.quantumData02,
		setQuantumData02: (value: States['quantumData02'] = 0) => states.quantumData02 = value,
		quantumData03: () => states.quantumData03,
		setQuantumData03: (value: States['quantumData03'] = 0) => states.quantumData03 = value,
		quantumData04: () => states.quantumData04,
		setQuantumData04: (value: States['quantumData04'] = 0) => states.quantumData04 = value,
		quantumData05: () => states.quantumData05,
		setQuantumData05: (value: States['quantumData05'] = 0) => states.quantumData05 = value,
		quantumData06: () => states.quantumData06,
		setQuantumData06: (value: States['quantumData06'] = 0) => states.quantumData06 = value,
		quantumData07: () => states.quantumData07,
		setQuantumData07: (value: States['quantumData07'] = 0) => states.quantumData07 = value,
		quantumData08: () => states.quantumData08,
		setQuantumData08: (value: States['quantumData08'] = 0) => states.quantumData08 = value,
		quantumData09: () => states.quantumData09,
		setQuantumData09: (value: States['quantumData09'] = 0) => states.quantumData09 = value,
		quantumData10: () => states.quantumData10,
		setQuantumData10: (value: States['quantumData10'] = 0) => states.quantumData10 = value,
	};
};
const [ useQuantumDataContexts, setQuantumDataContexts ] = createContext<ReturnType<typeof createQuantumDataContexts>>();

export const provideQuantumDataContexts = () => setQuantumDataContexts(createQuantumDataContexts());
export { useQuantumDataContexts };
