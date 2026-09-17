/** @jsxImportSource react */

import React from "react";
import { Child07 } from "./";
import type { RelayProps } from "../_models/relayContext";

export default function Child06(props: RelayProps) {
	return <Child07 relay={ props.relay } />;
};


// const Child06 = React.memo(function Child06(props: RelayProps) {
// 	return <Child07 relay={ props.relay } />;
// });
// export default Child06;


// export default function Child06(props: RelayProps) {
// 	return (
// 		<>
// 			<Child07 relay={ props.relay } />
// 			<p>{ props.relay }</p>
// 			<p>{ props.relay }</p>
// 			<p>{ props.relay }</p>
// 			<p>{ props.relay }</p>
// 			<p>{ props.relay }</p>
// 			<p>{ props.relay }</p>
// 			<p>{ props.relay }</p>
// 			<p>{ props.relay }</p>
// 			<p>{ props.relay }</p>
// 			<p>{ props.relay }</p>
// 		</>
// 	);
// };


// const Child06 = React.memo(function Child06(props: RelayProps) {
// 	return (
// 		<>
// 			<Child07 relay={ props.relay } />
// 			<p>{ props.relay }</p>
// 			<p>{ props.relay }</p>
// 			<p>{ props.relay }</p>
// 			<p>{ props.relay }</p>
// 			<p>{ props.relay }</p>
// 			<p>{ props.relay }</p>
// 			<p>{ props.relay }</p>
// 			<p>{ props.relay }</p>
// 			<p>{ props.relay }</p>
// 			<p>{ props.relay }</p>
// 		</>
// 	);
// });
// export default Child06;
