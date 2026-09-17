/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useZustandStore } from "../../_models/zustand";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function ZustandString03() {
	const { stringStore03, setString03 } = useZustandStore('zustandString03');
	const { setString04 } = useZustandStore('zustandString04');

	useLayoutEffect(() => {
		const value = +stringStore03;
		if (!value) return;

		setString03((value + 1).toString());
		if (value === dragRaceMax) {
			setString03('');
			setString04('1');
		}
	}, [ stringStore03 ]);

	return null;
}
