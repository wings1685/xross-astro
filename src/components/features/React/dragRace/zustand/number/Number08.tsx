/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useZustandStore } from "../../_models/zustand";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function ZustandNumber08() {
	const { numberStore08, setNumber08 } = useZustandStore('zustandNumber08');
	const { setNumber09 } = useZustandStore('zustandNumber09');

	useLayoutEffect(() => {
		if (!numberStore08) return;

		setNumber08(numberStore08 + 1);
		if (numberStore08 === dragRaceMax) {
			setNumber08(0);
			setNumber09(1);
		}
	}, [ numberStore08 ]);

	return null;
}
