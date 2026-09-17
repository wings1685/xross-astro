/** @jsxImportSource react */

import { useContext, useState } from "react";
import { recordStart } from "@/_global/lib/performance02";
import { RelayContext } from "../_models/relayContext";
import { useStore } from "../_models/stores";
import { Child01 } from "./";

export default function Child00() {
	const { setRelay } = useContext(RelayContext);
	const store = useStore('relay');
	const [ relayStart, setRelayStart ] = useState(0);

	const handleClick = () => {
		const start = relayStart + 1;
		recordStart('RelayProps');
		setRelayStart(start);

		recordStart('RelayContext');
		setRelay(start);

		recordStart('RelayStore');
		store.setStore(start);
	};

	return (
		<>
			<fieldset>
				<button onClick={ handleClick }>バケツリレー開始</button>
			</fieldset>
			<Child01 relay={ relayStart } />
		</>
	)
};
