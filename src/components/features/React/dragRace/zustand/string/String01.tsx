/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useZustandStore } from "../../_models/zustand";
import { recordStart, dragRaceMax } from "@/_global/lib/dragRace";

export default function ZustandString01() {
	const { startStore } = useZustandStore('zustandStart');
	const { stringStore01, setString01 } = useZustandStore('zustandString01');
	const { setString02 } = useZustandStore('zustandString02');

	useLayoutEffect(() => {
		if (startStore !== 'string') return;

		recordStart('ReactZustandString');
		setString01('1');
	}, [ startStore ]);

	useLayoutEffect(() => {
		const value = +stringStore01;
		if (!value) return;

		setString01((value + 1).toString());
		if (value === dragRaceMax) {
			setString01('');
			setString02('1');
		}
	}, [ stringStore01 ]);

	return null;
}
