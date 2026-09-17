/** @jsxImportSource react */

import { useContext, useEffect, useState, useSyncExternalStore } from "react";
import { recordFinished } from "@/_global/lib/performance03";
import { RelayContext } from "../_models/relayContext";
import { useStore } from "../_models/stores";
import { Child01 } from "./";
import type { RelayData } from "../_models/types";

export default function Child00() {
	const { relayContext } = useContext(RelayContext);
	const store = useStore('relay');
	const relayStore = useSyncExternalStore(store.subscribe, store.getSnapshot, store.getServerSnapshot);
	const [ relay, setRelay ] = useState<RelayData>(0);

	useEffect(() => {
		if (!relay) return;

		recordFinished('RelaySetter');
	}, [ relay ]);

	useEffect(() => {
		if (!relayContext) return;

		recordFinished('RelayContext');
	}, [ relayContext ]);

	useEffect(() => {
		if (!relayStore) return;

		recordFinished('RelayStore');
	}, [ relayStore ]);

	return <Child01 relay={ relay } setRelay={ setRelay } />;
};
