/** @jsxImportSource react */

import { useState } from "react";
import { RelayContext } from "./_models/relayContext";
import { Child00 } from "./_children";

export default function Parent() {
	const [ relayContext, setRelayContext ] = useState(0);

	return (
		<RelayContext value={{ relayContext, setRelayContext }}>
			<Child00 />
		</RelayContext>
	)
};
