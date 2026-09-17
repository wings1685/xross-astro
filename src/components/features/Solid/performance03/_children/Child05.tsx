import { Child06 } from ".";
import type { RelayProps } from "../_models/types";

export default function Child05(props: RelayProps) {
	return <Child06 relay={ props.relay } setRelay={ props.setRelay } />;
};
