import { createContext, createSignal, useContext } from "solid-js";
import { logContext } from "@/_global/lib/performance04";
import type { Context, JSX } from "solid-js";

export type RelayData = number;
export type RelayProps = {
	relay: RelayData;
};

const createRelayDataContexts = () => {
	const [ relayData, setRelayData ] = createSignal<RelayData>(0);
	const setRelayDataWithLog = (value: RelayData = 0) => {
		logContext();
		setRelayData(value);
	};

	return { relayData, setRelayData, setRelayDataWithLog };
};
type RelayDataContextsType = ReturnType<typeof createRelayDataContexts>;
const RelayDataContexts = createContext<RelayDataContextsType>() as Context<RelayDataContextsType>;

export const RelayDataProvider = (props: { children: JSX.Element }) => {
	return (
		<RelayDataContexts.Provider value={ createRelayDataContexts() }>{ props.children }</RelayDataContexts.Provider>
	);
}
export const useRelayDataContexts = () => useContext(RelayDataContexts);
