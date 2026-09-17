/** @jsxImportSource react */

import { Child03 } from "./";
import type { RelayProps } from "../_models/types";

export default function Child02(props: RelayProps) {
	return <Child03 relay={ props.relay } setRelay={ props.setRelay } />;
};
