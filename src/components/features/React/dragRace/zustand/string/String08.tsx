/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useZustandStore } from "../../_models/zustand";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function ZustandString08() {
	const { stringStore08, setString08 } = useZustandStore('zustandString08');
	const { setString09 } = useZustandStore('zustandString09');

	useLayoutEffect(() => {
		const value = +stringStore08;
		if (!value) return;

		setString08((value + 1).toString());
		if (value === dragRaceMax) {
			setString08('');
			setString09('1');
		}
	}, [ stringStore08 ]);

	return null;
}
