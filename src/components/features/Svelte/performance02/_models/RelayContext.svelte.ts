import { createContext } from "svelte";

const createRelayDataContexts = () => {
	const states = $state({
		relayData: 0,
	});
	type States = typeof states;

	return {
		relayData: () => states.relayData,
		setRelayData: (value: States['relayData'] = 0) => states.relayData = value,
	};
};
const [ useRelayDataContexts, setRelayDataContexts ] = createContext<ReturnType<typeof createRelayDataContexts>>();

export type RelayProps = {
	relay: ReturnType<ReturnType<typeof createRelayDataContexts>['relayData']>;
}
export const provideRelayDataContexts = () => setRelayDataContexts(createRelayDataContexts());
export { useRelayDataContexts };
