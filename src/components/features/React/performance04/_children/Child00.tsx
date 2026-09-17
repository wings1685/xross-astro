/** @jsxImportSource react */

import { useContext, useLayoutEffect, useState, useSyncExternalStore } from "react";
import { recordStart, recordFinished } from "@/_global/lib/performance04";
import { RelayContext } from "../_models/relayContext";
import { useStore } from "../_models/stores";
import { Child01 } from "./";

export default function Child00() {
	const { relayContext, setRelayContext } = useContext(RelayContext);
	const raceId = useStore('raceId');
	const raceIdStore = useSyncExternalStore(raceId.subscribe, raceId.getSnapshot, raceId.getServerSnapshot);
	const [ relayStart, setRelayStart ] = useState(0);

	useLayoutEffect(() => {
		if (raceIdStore !== 'Props' || relayContext) return;

		recordStart('Props');
		setRelayStart(1);
	}, [ raceIdStore, relayContext ]);

	useLayoutEffect(() => {
		if (raceIdStore !== 'Context' || !relayContext) return;

		recordFinished('Context');
		setRelayContext(0);
		setRelayStart(0);

		raceId.setStore('Memo');
	}, [ raceIdStore, relayContext ]);

	return <Child01 relay={ relayStart } />;
};
