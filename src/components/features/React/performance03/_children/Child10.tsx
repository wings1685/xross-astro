/** @jsxImportSource react */

import { useContext } from "react";
import { useStore } from "../_models/stores";
import { recordStart } from "@/_global/lib/performance03";
import { RelayContext } from "../_models/relayContext";
import type { RelayProps } from "../_models/types";

export default function Child10(props: RelayProps) {
	const { relayContext, setRelayContext } = useContext(RelayContext);
	const store = useStore('relay');

	const handleChange = () => {
		const start = relayContext + 1;

		recordStart('RelaySetter');
		props.setRelay(start);

		recordStart('RelayContext');
		setRelayContext(start);

		recordStart('RelayStore');
		store.setStore(start);
	};

	return (
		<fieldset>
			<input type="number" onChange={ handleChange } value={ props.relay } />
		</fieldset>
	);
};
