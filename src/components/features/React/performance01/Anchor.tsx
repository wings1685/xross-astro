/** @jsxImportSource react */

import { recordStart } from "@/_global/lib/performance01";
import { useStore } from "./_models/stores";
import type { ReactNode } from "react";

type Props = {
	to: string;
	children: ReactNode;
};

export default function Anchor(props: Props) {
	const store = useStore('atId');

	const handleClick = () => {
		recordStart('GlobalSignal');
		store.setStore(props.to);
	};

	return (
		<button onClick={ handleClick }>
			{ props.children }
		</button>
	)
};
