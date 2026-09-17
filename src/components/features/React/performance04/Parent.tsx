/** @jsxImportSource react */

import { useState } from "react";
import { RelayContext } from "./_models/relayContext";
import { logContext } from "@/_global/lib/performance04";
import { Child00 } from "./_children";

export default function Parent() {
	const [ relayContext, setRelayContext ] = useState(0);
	const setRelayDataWithLog = (value: typeof relayContext = 0) => {
		logContext();
		setRelayContext(value);
	};

	return (
		<RelayContext value={{ relayContext, setRelayContext, setRelayDataWithLog }}>
			<Child00 />
		</RelayContext>
	)
};
