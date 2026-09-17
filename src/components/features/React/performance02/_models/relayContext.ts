/** @jsxImportSource react */

import { createContext } from "react";

export type RelayProps = {
	relay: number;
};

export const RelayContext = createContext({
	relay: 0,
	setRelay: (_: RelayProps['relay']) => {},
});
