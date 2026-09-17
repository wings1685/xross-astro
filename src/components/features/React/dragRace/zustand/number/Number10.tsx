/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useZustandStore } from "../../_models/zustand";
import { dragRaceMax, recordFinished } from "@/_global/lib/dragRace";

export default function ZustandNumber10() {
	const { numberStore10, setNumber10 } = useZustandStore('zustandNumber10');
	const { setStart } = useZustandStore('zustandStart');

	useLayoutEffect(() => {
		if (!numberStore10) return;

		if (numberStore10 === dragRaceMax) {
			recordFinished('ReactZustandNumber');
			setNumber10(0);
			setStart('string');
		} else {
			setNumber10(numberStore10 + 1);
		}
	}, [ numberStore10 ]);

	return null;
}
