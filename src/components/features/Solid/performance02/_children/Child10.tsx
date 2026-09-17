import { createEffect } from "solid-js";
import { useStore } from "@/_global/piquo";
import { recordFinished } from "@/_global/lib/performance02";
import { useRelayDataContexts } from "../_models/relayContext";
import type { RelayProps } from "../_models/relayContext";

export default function Child01(props: RelayProps) {
	const { relayData } = useRelayDataContexts();
	const { solidRelay } = useStore('solidRelay');

	createEffect(() => {
		if (!props.relay) return;

		recordFinished('RelayProps');
	});

	createEffect(() => {
		if (!relayData()) return;

		recordFinished('RelayContext');
	});

	createEffect(() => {
		if (!solidRelay()) return;

		recordFinished('RelayStore');
	});

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
