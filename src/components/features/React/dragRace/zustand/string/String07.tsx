/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useZustandStore } from "../../_models/zustand";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function ZustandString07() {
	const { stringStore07, setString07 } = useZustandStore('zustandString07');
	const { setString08 } = useZustandStore('zustandString08');

	useLayoutEffect(() => {
		const value = +stringStore07;
		if (!value) return;

		setString07((value + 1).toString());
		if (value === dragRaceMax) {
			setString07('');
			setString08('1');
		}
	}, [ stringStore07 ]);

	return null;
}
