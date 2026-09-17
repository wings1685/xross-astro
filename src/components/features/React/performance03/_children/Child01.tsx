/** @jsxImportSource react */

import { Child02 } from "./";
import type { RelayProps } from "../_models/types";

export default function Child01(props: RelayProps) {
	return <Child02 relay={ props.relay } setRelay={ props.setRelay } />;
};
