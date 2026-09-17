/** @jsxImportSource react */

import { useState } from "react";
import { RelayContext } from "./_models/relayContext";
import { Child00 } from "./_children";

export default function Parent() {
	const [ relay, setRelay ] = useState(0);

	return (
		<RelayContext value={{ relay, setRelay }}>
			<Child00 />
		</RelayContext>
	)
};
