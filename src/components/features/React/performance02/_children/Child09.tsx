/** @jsxImportSource react */

import React from "react";
import { Child10 } from "./";
import type { RelayProps } from "../_models/relayContext";

export default function Child09(props: RelayProps) {
	return <Child10 relay={ props.relay } />;
};


// const Child09 = React.memo(function Child09(props: RelayProps) {
// 	return <Child10 relay={ props.relay } />;
// });
// export default Child09;


// export default function Child09(props: RelayProps) {
// 	return (
// 		<>
// 			<Child10 relay={ props.relay } />
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


// const Child09 = React.memo(function Child09(props: RelayProps) {
// 	return (
// 		<>
// 			<Child10 relay={ props.relay } />
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
// export default Child09;
