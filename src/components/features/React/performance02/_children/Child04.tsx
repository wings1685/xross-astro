/** @jsxImportSource react */

import React from "react";
import { Child05 } from "./";
import type { RelayProps } from "../_models/relayContext";

export default function Child04(props: RelayProps) {
	return <Child05 relay={ props.relay } />;
};


// const Child04 = React.memo(function Child04(props: RelayProps) {
// 	return <Child05 relay={ props.relay } />;
// });
// export default Child04;


// export default function Child04(props: RelayProps) {
// 	return (
// 		<>
// 			<Child05 relay={ props.relay } />
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


// const Child04 = React.memo(function Child04(props: RelayProps) {
// 	return (
// 		<>
// 			<Child05 relay={ props.relay } />
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
// export default Child04;
