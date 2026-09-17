/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useZustandStore } from "../../_models/zustand";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function ZustandString09() {
	const { stringStore09, setString09 } = useZustandStore('zustandString09');
	const { setString10 } = useZustandStore('zustandString10');

	useLayoutEffect(() => {
		const value = +stringStore09;
		if (!value) return;

		setString09((value + 1).toString());
		if (value === dragRaceMax) {
			setString09('');
			setString10('1');
		}
	}, [ stringStore09 ]);

	return null;
}
