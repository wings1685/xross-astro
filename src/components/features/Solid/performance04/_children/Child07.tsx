import { createMemo } from "solid-js";
import { logProps } from "@/_global/lib/performance04";
import { Child08 } from "./";
import type { RelayProps } from "../_models/relayContext";

export default function Child07(props: RelayProps) {
	const relayData = createMemo(() => {
		if (!props.relay) return 0;

		logProps();
		return props.relay;
	});

	return <Child08 relay={ relayData() } />;
};
