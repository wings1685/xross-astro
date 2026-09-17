import { useStore } from "@/_global/piquo";
import { recordStart } from "@/_global/lib/performance03";
import { useRelayDataContexts } from "../_models/relayContext";
import type { RelayProps } from "../_models/types";

export default function Child10(props: RelayProps) {
	const { relayData, setRelayData } = useRelayDataContexts();
	const { solidSetRelay } = useStore('solidRelay');

	const handleChange = () => {
		const start = relayData() + 1;

		recordStart('RelaySetter');
		props.setRelay(start);

		recordStart('RelayContext');
		setRelayData(start);

		recordStart('RelayStore');
		solidSetRelay(start);
	};

	return (
		<fieldset>
			<input type="number" value={ props.relay } onChange={ handleChange } />
		</fieldset>
	)
};
