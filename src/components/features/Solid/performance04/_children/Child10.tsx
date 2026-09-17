import { createEffect, createMemo } from "solid-js";
import { useStore } from "@/_global/piquo";
import { recordStart, recordFinished, logProps } from "@/_global/lib/performance04";
import { useRelayDataContexts } from "../_models/relayContext";
import type { RelayProps } from "../_models/relayContext";

export default function Child10(props: RelayProps) {
	const { solidRaceId, solidSetRaceId } = useStore('solidRaceId');
	const { setRelayDataWithLog } = useRelayDataContexts();

	const relayData = createMemo(() => {
		if (!props.relay) return 0;

		logProps();
		return props.relay;
	});

	createEffect(() => {
		if (solidRaceId() !== 'Props' || !relayData()) return;

		recordFinished('Props');

		solidSetRaceId('Context');
		recordStart('Context');
		setRelayDataWithLog(1);
	});

	return null;
};
