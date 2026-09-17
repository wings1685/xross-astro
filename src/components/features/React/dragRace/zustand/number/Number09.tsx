/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useZustandStore } from "../../_models/zustand";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function ZustandNumber09() {
	const { numberStore09, setNumber09 } = useZustandStore('zustandNumber09');
	const { setNumber10 } = useZustandStore('zustandNumber10');

	useLayoutEffect(() => {
		if (!numberStore09) return;

		setNumber09(numberStore09 + 1);
		if (numberStore09 === dragRaceMax) {
			setNumber09(0);
			setNumber10(1);
		}
	}, [ numberStore09 ]);

	return null;
}
