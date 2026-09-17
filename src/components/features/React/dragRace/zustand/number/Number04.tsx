/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useZustandStore } from "../../_models/zustand";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function ZustandNumber04() {
	const { numberStore04, setNumber04 } = useZustandStore('zustandNumber04');
	const { setNumber05 } = useZustandStore('zustandNumber05');

	useLayoutEffect(() => {
		if (!numberStore04) return;

		setNumber04(numberStore04 + 1);
		if (numberStore04 === dragRaceMax) {
			setNumber04(0);
			setNumber05(1);
		}
	}, [ numberStore04 ]);

	return null;
}
