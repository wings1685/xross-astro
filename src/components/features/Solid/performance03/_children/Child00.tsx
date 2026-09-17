import { createEffect, createSignal } from "solid-js";
import { recordFinished } from "@/_global/lib/performance03";
import { useRelayDataContexts } from "../_models/relayContext";
import { useStore } from "@/_global/piquo";
import { Child01 } from ".";
import type { RelayData } from "../_models/relayContext";

export default function Child00() {
	const { relayData } = useRelayDataContexts();
	const { solidRelay } = useStore('solidRelay');
	const  [ relay, setRelay ] = createSignal<RelayData>(0);

	createEffect(() => {
		if (!relay()) return;

		recordFinished('RelaySetter');
	});

	createEffect(() => {
		if (!relayData()) return;

		recordFinished('RelayContext');
	});

	createEffect(() => {
		if (!solidRelay()) return;

		recordFinished('RelayStore');
	});

	return <Child01 relay={ relay() } setRelay={ setRelay } />;
}
