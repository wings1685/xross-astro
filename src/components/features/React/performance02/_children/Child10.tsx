/** @jsxImportSource react */

import { useContext, useEffect, useSyncExternalStore } from "react";
import { useStore } from "../_models/stores";
import { recordFinished } from "@/_global/lib/performance02";
import { RelayContext } from "../_models/relayContext";
import type { RelayProps } from "../_models/relayContext";

export default function Child10(props: RelayProps) {
	const { relay } = useContext(RelayContext);
	const store = useStore('relay');
	const relayStore = useSyncExternalStore(store.subscribe, store.getSnapshot, store.getServerSnapshot);

	useEffect(() => {
		if (!props.relay) return;

		recordFinished('RelayProps');
	}, [ props.relay ]);

	useEffect(() => {
		if (!relay) return;

		recordFinished('RelayContext');
	}, [ relay ]);

	useEffect(() => {
		if (!relayStore) return;

		recordFinished('RelayStore');
	}, [ relayStore ]);

	return null;
	// return (
	// 	<>
	// 		<p>{ props.relay }</p>
	// 		<p>{ props.relay }</p>
	// 		<p>{ props.relay }</p>
	// 		<p>{ props.relay }</p>
	// 		<p>{ props.relay }</p>
	// 		<p>{ props.relay }</p>
	// 		<p>{ props.relay }</p>
	// 		<p>{ props.relay }</p>
	// 		<p>{ props.relay }</p>
	// 		<p>{ props.relay }</p>
	// 	</>
	// );
};
