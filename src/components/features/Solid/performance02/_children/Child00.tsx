import { recordStart } from "@/_global/lib/performance02";
import { useRelayDataContexts } from "../_models/relayContext";
import { useStore } from "@/_global/piquo";
import { Child01 } from "./";
import { createSignal } from "solid-js";

export default function Child00() {
	const { setRelayData } = useRelayDataContexts();
	const { solidSetRelay } = useStore('solidRelay');
	const [ relayStart, setRelayStart ] = createSignal(0);

	const handleClick = () => {
		const start = relayStart() + 1;
		recordStart('RelayProps');
		setRelayStart(start);

		recordStart('RelayContext');
		setRelayData(start);

		recordStart('RelayStore');
		solidSetRelay(start);
	};

	return (
		<>
			<fieldset>
				<button onClick={ handleClick }>バケツリレー開始</button>
			</fieldset>
			<Child01 relay={ relayStart() } />
		</>
	)
};
