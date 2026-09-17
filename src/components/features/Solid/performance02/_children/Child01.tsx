import { Child02 } from "./";
import type { RelayProps } from "../_models/relayContext";

export default function Child01(props: RelayProps) {
	return <Child02 relay={ props.relay } />;
	// return (
	// 	<>
	// 		<Child02 relay={ props.relay } />
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
