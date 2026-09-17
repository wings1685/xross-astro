/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useZustandStore } from "../../_models/zustand";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function ZustandString04() {
	const { stringStore04, setString04 } = useZustandStore('zustandString04');
	const { setString05 } = useZustandStore('zustandString05');

	useLayoutEffect(() => {
		const value = +stringStore04;
		if (!value) return;

		setString04((value + 1).toString());
		if (value === dragRaceMax) {
			setString04('');
			setString05('1');
		}
	}, [ stringStore04 ]);

	return null;
}
