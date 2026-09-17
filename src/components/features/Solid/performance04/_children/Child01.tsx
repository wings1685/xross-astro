import { createMemo } from "solid-js";
import { logProps } from "@/_global/lib/performance04";
import { Child02 } from "./";
import type { RelayProps } from "../_models/relayContext";

export default function Child01(props: RelayProps) {
	const relayData = createMemo(() => {
		if (!props.relay) return 0;

		logProps();
		return props.relay;
	});

	return <Child02 relay={ relayData() } />;
};
