import { Child03 } from "./";
import type { RelayProps } from "../_models/relayContext";

export default function Child02(props: RelayProps) {
	return <Child03 relay={ props.relay } />;
	// return (
	// 	<>
	// 		<Child03 relay={ props.relay } />
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
