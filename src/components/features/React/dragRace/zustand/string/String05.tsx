/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useZustandStore } from "../../_models/zustand";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function ZustandString05() {
	const { stringStore05, setString05 } = useZustandStore('zustandString05');
	const { setString06 } = useZustandStore('zustandString06');

	useLayoutEffect(() => {
		const value = +stringStore05;
		if (!value) return;

		setString05((value + 1).toString());
		if (value === dragRaceMax) {
			setString05('');
			setString06('1');
		}
	}, [ stringStore05 ]);

	return null;
}
