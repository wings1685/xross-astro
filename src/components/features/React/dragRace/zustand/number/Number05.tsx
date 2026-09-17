/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useZustandStore } from "../../_models/zustand";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function ZustandNumber05() {
	const { numberStore05, setNumber05 } = useZustandStore('zustandNumber05');
	const { setNumber06 } = useZustandStore('zustandNumber06');

	useLayoutEffect(() => {
		if (!numberStore05) return;

		setNumber05(numberStore05 + 1);
		if (numberStore05 === dragRaceMax) {
			setNumber05(0);
			setNumber06(1);
		}
	}, [ numberStore05 ]);

	return null;
}
