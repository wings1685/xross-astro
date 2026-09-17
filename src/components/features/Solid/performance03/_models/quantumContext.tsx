import { createContext, createSignal, useContext } from "solid-js";
import type { Context, JSX } from "solid-js";

export type QuantumData = number;

const createQuantumDataContexts = () => {
	const [ quantumData01, setQuantumData01 ] = createSignal<QuantumData>(0);
	const [ quantumData02, setQuantumData02 ] = createSignal<QuantumData>(0);
	const [ quantumData03, setQuantumData03 ] = createSignal<QuantumData>(0);
	const [ quantumData04, setQuantumData04 ] = createSignal<QuantumData>(0);
	const [ quantumData05, setQuantumData05 ] = createSignal<QuantumData>(0);
	const [ quantumData06, setQuantumData06 ] = createSignal<QuantumData>(0);
	const [ quantumData07, setQuantumData07 ] = createSignal<QuantumData>(0);
	const [ quantumData08, setQuantumData08 ] = createSignal<QuantumData>(0);
	const [ quantumData09, setQuantumData09 ] = createSignal<QuantumData>(0);
	const [ quantumData10, setQuantumData10 ] = createSignal<QuantumData>(0);

	return {
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
	};
};
type QuantumDataContextsType = ReturnType<typeof createQuantumDataContexts>;
const QuantumDataContexts = createContext<QuantumDataContextsType>() as Context<QuantumDataContextsType>;

export const QuantumDataProvider = (props: { children: JSX.Element }) => {
	return (
		<QuantumDataContexts.Provider value={ createQuantumDataContexts() }>{ props.children }</QuantumDataContexts.Provider>
	);
}
export const useQuantumDataContexts = () => useContext(QuantumDataContexts);
