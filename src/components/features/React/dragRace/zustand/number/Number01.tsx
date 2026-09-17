/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useZustandStore } from "../../_models/zustand";
import { recordStart, dragRaceMax } from "@/_global/lib/dragRace";

export default function ZustandNumber01() {
	const { startStore } = useZustandStore('zustandStart');
	const { numberStore01, setNumber01 } = useZustandStore('zustandNumber01');
	const { setNumber02 } = useZustandStore('zustandNumber02');

	useLayoutEffect(() => {
		if (startStore !== 'number') return;

		recordStart('ReactZustandNumber');
		setNumber01(1);
	}, [ startStore ]);

	useLayoutEffect(() => {
		if (!numberStore01) return;

		setNumber01(numberStore01 + 1);
		if (numberStore01 === dragRaceMax) {
			setNumber01(0);
			setNumber02(1);
		}
	}, [ numberStore01 ]);

	return null;
}
