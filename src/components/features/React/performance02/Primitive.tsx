/** @jsxImportSource react */

import { useEffect, useState } from "react";
import { recordFinished, recordStart } from "@/_global/lib/performance02";
import type { ReactiveTypeProps } from "@/_global/types/performance02";

export default function Primitive(props: ReactiveTypeProps) {
	const [ reactive, setReactive ] = useState(0);

	useEffect(() => {
		if (!props.start) return;

		recordStart('Primitive');
		setReactive(props.start);
	}, [ props.start ]);

	useEffect(() => {
		if (!reactive) return;

		recordFinished('Primitive');
	}, [ reactive ]);

	return null;
};
