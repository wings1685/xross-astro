import { createEffect, createSignal } from "solid-js";
import { useStore } from "@/_global/piquo";
import { recordStart, recordFinished } from "@/_global/lib/performance04";
import { useRelayDataContexts } from "../_models/relayContext";
import { Child01 } from "./";

export default function Child00() {
	const { relayData, setRelayData } = useRelayDataContexts();
	const { solidRaceId, solidSetRaceId } = useStore('solidRaceId');
	const [ relayStart, setRelayStart ] = createSignal(0);

	createEffect(() => {
		if (solidRaceId() !== 'Props' || relayData()) return;

		recordStart('Props');
		setRelayStart(1);
	});

	createEffect(() => {
		if (solidRaceId() !== 'Context' || !relayData()) return;

		recordFinished('Context');
		setRelayData(0);
		setRelayStart(0);

		solidSetRaceId('Memo');
	});

	return <Child01 relay={ relayStart() } />;
};
