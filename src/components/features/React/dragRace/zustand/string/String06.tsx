/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useZustandStore } from "../../_models/zustand";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function ZustandString06() {
	const { stringStore06, setString06 } = useZustandStore('zustandString06');
	const { setString07 } = useZustandStore('zustandString07');

	useLayoutEffect(() => {
		const value = +stringStore06;
		if (!value) return;

		setString06((value + 1).toString());
		if (value === dragRaceMax) {
			setString06('');
			setString07('1');
		}
	}, [ stringStore06 ]);

	return null;
}
