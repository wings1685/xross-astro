/** @jsxImportSource react */

import { createContext } from "react";
import type { RelayData } from "./types";

export const RelayContext = createContext({
	relayContext: 0,
	setRelayContext: (_: RelayData) => {},
	setRelayDataWithLog: (_: RelayData) => {},
});
