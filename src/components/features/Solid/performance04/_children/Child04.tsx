import { createMemo } from "solid-js";
import { logProps } from "@/_global/lib/performance04";
import { Child05 } from "./";
import type { RelayProps } from "../_models/relayContext";

export default function Child04(props: RelayProps) {
	const relayData = createMemo(() => {
		if (!props.relay) return 0;

		logProps();
		return props.relay;
	});

	return <Child05 relay={ relayData() } />;
};
