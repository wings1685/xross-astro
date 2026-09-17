/** @jsxImportSource react */

import React from "react";
import { Child06 } from "./";
import type { RelayProps } from "../_models/relayContext";

export default function Child05(props: RelayProps) {
	return <Child06 relay={ props.relay } />;
};


// const Child05 = React.memo(function Child05(props: RelayProps) {
// 	return <Child06 relay={ props.relay } />;
// });
// export default Child05;


// export default function Child05(props: RelayProps) {
// 	return (
// 		<>
// 			<Child06 relay={ props.relay } />
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


// const Child05 = React.memo(function Child05(props: RelayProps) {
// 	return (
// 		<>
// 			<Child06 relay={ props.relay } />
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
// export default Child05;
