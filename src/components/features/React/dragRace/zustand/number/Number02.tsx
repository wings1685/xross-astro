/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useZustandStore } from "../../_models/zustand";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function ZustandNumber02() {
	const { numberStore02, setNumber02 } = useZustandStore('zustandNumber02');
	const { setNumber03 } = useZustandStore('zustandNumber03');

	useLayoutEffect(() => {
		if (!numberStore02) return;

		setNumber02(numberStore02 + 1);
		if (numberStore02 === dragRaceMax) {
			setNumber02(0);
			setNumber03(1);
		}
	}, [ numberStore02 ]);

	return null;
}
