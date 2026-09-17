/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useZustandStore } from "../../_models/zustand";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function ZustandString02() {
	const { stringStore02, setString02 } = useZustandStore('zustandString02');
	const { setString03 } = useZustandStore('zustandString03');

	useLayoutEffect(() => {
		const value = +stringStore02;
		if (!value) return;

		setString02((value + 1).toString());
		if (value === dragRaceMax) {
			setString02('');
			setString03('1');
		}
	}, [ stringStore02 ]);

	return null;
}
