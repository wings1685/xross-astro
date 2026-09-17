/** @jsxImportSource react */

import { useMemo } from "react";
import { logProps } from "@/_global/lib/performance04";
import { Child08 } from "./";
import type { RelayProps } from "../_models/types";

export default function Child07(props: RelayProps) {
	const relayData = useMemo(() => {
		if (!props.relay) return 0;

		logProps();
		return props.relay;
	}, [ props.relay ]);

	return <Child08 relay={ relayData } />;
};
