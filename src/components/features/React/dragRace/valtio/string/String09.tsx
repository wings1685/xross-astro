/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useSnapshot } from "valtio";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function ValtioString09() {
	const { stringStore09, setString09 } = useReactStore('valtioString09');
	const store09 = useSnapshot(stringStore09);
	const { setString10 } = useReactStore('valtioString10');

	useLayoutEffect(() => {
		const value = +store09.value;
		if (!value) return;

		setString09((value + 1).toString());
		if (value === dragRaceMax) {
			setString09('');
			setString10('1');
		}
	}, [ store09.value ]);

	return null;
}
