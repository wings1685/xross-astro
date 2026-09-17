/** @jsxImportSource react */

import { useContext, useLayoutEffect, useMemo, useSyncExternalStore } from "react";
import { useStore } from "../_models/stores";
import { recordStart, recordFinished, logProps } from "@/_global/lib/performance04";
import { RelayContext } from "../_models/relayContext";
import type { RelayProps } from "../_models/types";

export default function Child10(props: RelayProps) {
	const raceId = useStore('raceId');
	const raceIdStore = useSyncExternalStore(raceId.subscribe, raceId.getSnapshot, raceId.getServerSnapshot);
	const { setRelayDataWithLog } = useContext(RelayContext);

	const relayData = useMemo(() => {
		if (!props.relay) return 0;

		logProps();
		return props.relay;
	}, [ props.relay ]);

	useLayoutEffect(() => {
		if (raceIdStore !== 'Props' || !relayData) return;

		recordFinished('Props');

		raceId.setStore('Context');
		recordStart('Context');
		setRelayDataWithLog(1);
	}, [ raceIdStore, relayData ]);

	return null;
};
