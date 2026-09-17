/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useZustandStore } from "../../_models/zustand";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function ZustandNumber06() {
	const { numberStore06, setNumber06 } = useZustandStore('zustandNumber06');
	const { setNumber07 } = useZustandStore('zustandNumber07');

	useLayoutEffect(() => {
		if (!numberStore06) return;

		setNumber06(numberStore06 + 1);
		if (numberStore06 === dragRaceMax) {
			setNumber06(0);
			setNumber07(1);
		}
	}, [ numberStore06 ]);

	return null;
}
