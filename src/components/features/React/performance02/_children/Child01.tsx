/** @jsxImportSource react */

import React from "react";
import { Child02 } from "./";
import type { RelayProps } from "../_models/relayContext";

export default function Child01(props: RelayProps) {
	return <Child02 relay={ props.relay } />;
};


// const Child01 = React.memo(function Child01(props: RelayProps) {
// 	return <Child02 relay={ props.relay } />;
// });
// export default Child01;


// export default function Child01(props: RelayProps) {
// 	return (
// 		<>
// 			<Child02 relay={ props.relay } />
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


// const Child01 = React.memo(function Child01(props: RelayProps) {
// 	return (
// 		<>
// 			<Child02 relay={ props.relay } />
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
// export default Child01;
