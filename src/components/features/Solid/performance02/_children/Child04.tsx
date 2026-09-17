import { Child05 } from "./";
import type { RelayProps } from "../_models/relayContext";

export default function Child04(props: RelayProps) {
	return <Child05 relay={ props.relay } />;
	// return (
	// 	<>
	// 		<Child05 relay={ props.relay } />
	// 		<p>{ props.relay }</p>
	// 		<p>{ props.relay }</p>
	// 		<p>{ props.relay }</p>
	// 		<p>{ props.relay }</p>
	// 		<p>{ props.relay }</p>
	// 		<p>{ props.relay }</p>
	// 		<p>{ props.relay }</p>
	// 		<p>{ props.relay }</p>
	// 		<p>{ props.relay }</p>
	// 		<p>{ props.relay }</p>
	// 	</>
	// );
};
