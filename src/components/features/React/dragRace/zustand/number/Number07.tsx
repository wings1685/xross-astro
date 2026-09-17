/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useZustandStore } from "../../_models/zustand";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function ZustandNumber07() {
	const { numberStore07, setNumber07 } = useZustandStore('zustandNumber07');
	const { setNumber08 } = useZustandStore('zustandNumber08');

	useLayoutEffect(() => {
		if (!numberStore07) return;

		setNumber07(numberStore07 + 1);
		if (numberStore07 === dragRaceMax) {
			setNumber07(0);
			setNumber08(1);
		}
	}, [ numberStore07 ]);

	return null;
}
