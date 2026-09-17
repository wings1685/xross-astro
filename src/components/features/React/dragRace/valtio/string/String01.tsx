/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useSnapshot } from "valtio";
import { useReactStore } from "../../_models/stores";
import { recordStart, dragRaceMax } from "@/_global/lib/dragRace";

export default function ValtioString01() {
	const { startStore } = useReactStore('valtioStart');
	const start = useSnapshot(startStore);
	const { stringStore01, setString01 } = useReactStore('valtioString01');
	const store01 = useSnapshot(stringStore01);
	const { setString02 } = useReactStore('valtioString02');

	useLayoutEffect(() => {
		if (start.value !== 'string') return;

		recordStart('ReactValtioString');
		setString01('1');
	}, [ start.value ]);

	useLayoutEffect(() => {
		const value = +store01.value;
		if (!value) return;

		setString01((value + 1).toString());
		if (value === dragRaceMax) {
			setString01('');
			setString02('1');
		}
	}, [ store01.value ]);

	return null;
}
