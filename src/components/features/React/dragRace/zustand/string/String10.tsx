/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useZustandStore } from "../../_models/zustand";
import { dragRaceMax, recordFinished, logTotal } from "@/_global/lib/dragRace";

export default function ZustandString10() {
	const { stringStore10, setString10 } = useZustandStore('zustandString10');
	const { setStart } = useZustandStore('zustandStart');

	useLayoutEffect(() => {
		const value = +stringStore10;
		if (!value) return;

		if (value === dragRaceMax) {
			recordFinished('ReactZustandString');
			logTotal('ReactZustand');
			setStart(null);
			setString10('');
		} else {
			setString10((value + 1).toString());
		}
	}, [ stringStore10 ]);

	return null;
}
