import { Child04 } from ".";
import type { RelayProps } from "../_models/types";

export default function Child03(props: RelayProps) {
	return <Child04 relay={ props.relay } setRelay={ props.setRelay } />;
};
