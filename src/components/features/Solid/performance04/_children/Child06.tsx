import { createMemo } from "solid-js";
import { logProps } from "@/_global/lib/performance04";
import { Child07 } from "./";
import type { RelayProps } from "../_models/relayContext";

export default function Child06(props: RelayProps) {
	const relayData = createMemo(() => {
		if (!props.relay) return 0;

		logProps();
		return props.relay;
	});

	return <Child07 relay={ relayData() } />;
};
