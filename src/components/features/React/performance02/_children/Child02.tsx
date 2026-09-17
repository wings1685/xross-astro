/** @jsxImportSource react */

import React from "react";
import { Child03 } from "./";
import type { RelayProps } from "../_models/relayContext";

export default function Child02(props: RelayProps) {
	return <Child03 relay={ props.relay } />;
};


// const Child02 = React.memo(function Child02(props: RelayProps) {
// 	return <Child03 relay={ props.relay } />;
// });
// export default Child02;


// export default function Child02(props: RelayProps) {
// 	return (
// 		<>
// 			<Child03 relay={ props.relay } />
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


// const Child02 = React.memo(function Child02(props: RelayProps) {
// 	return (
// 		<>
// 			<Child03 relay={ props.relay } />
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
// export default Child02;
