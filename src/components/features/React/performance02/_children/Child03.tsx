/** @jsxImportSource react */

import React from "react";
import { Child04 } from "./";
import type { RelayProps } from "../_models/relayContext";

export default function Child03(props: RelayProps) {
	return <Child04 relay={ props.relay } />;
};


// const Child03 = React.memo(function Child03(props: RelayProps) {
// 	return <Child04 relay={ props.relay } />;
// });
// export default Child03;


// export default function Child03(props: RelayProps) {
// 	return (
// 		<>
// 			<Child04 relay={ props.relay } />
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


// const Child03 = React.memo(function Child03(props: RelayProps) {
// 	return (
// 		<>
// 			<Child04 relay={ props.relay } />
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
// export default Child03;
