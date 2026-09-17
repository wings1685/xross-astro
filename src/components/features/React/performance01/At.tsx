/** @jsxImportSource react */

import { useEffect, useRef, useSyncExternalStore } from "react";
import { recordStart, recordFinished } from "@/_global/lib/performance01";
import { useStore } from "./_models/stores";

type Props = {
	id: string;
};

export default function At(props: Props) {
	const store = useStore('atId');
	const atId = useSyncExternalStore(store.subscribe, store.getSnapshot, store.getServerSnapshot);

	const el = useRef<HTMLSpanElement | null>(null);

	useEffect(() => {
		if (!el || !el.current || props.id !== atId) return;

		el.current.scrollIntoView({ behavior: 'smooth' });
		recordFinished('GlobalSignal');
		store.setStore('');
		recordStart('Hydration');
	}, [ atId ]);

	return (
		<span ref={ el } id={ `at_${props.id}` } className="invisible_target" />
	)
}
