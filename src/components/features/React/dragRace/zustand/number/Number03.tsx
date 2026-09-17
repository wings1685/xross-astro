/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useZustandStore } from "../../_models/zustand";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function ZustandNumber03() {
	const { numberStore03, setNumber03 } = useZustandStore('zustandNumber03');
	const { setNumber04 } = useZustandStore('zustandNumber04');

	useLayoutEffect(() => {
		if (!numberStore03) return;

		setNumber03(numberStore03 + 1);
		if (numberStore03 === dragRaceMax) {
			setNumber03(0);
			setNumber04(1);
		}
	}, [ numberStore03 ]);

	return null;
}
