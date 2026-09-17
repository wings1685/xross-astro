/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useSnapshot } from "valtio";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax, recordFinished, logTotal } from "@/_global/lib/dragRace";

export default function ValtioString10() {
	const { stringStore10, setString10 } = useReactStore('valtioString10');
	const store10 = useSnapshot(stringStore10);
	const { setStart } = useReactStore('valtioStart');

	useLayoutEffect(() => {
		const value = +store10.value;
		if (!value) return;

		if (value === dragRaceMax) {
			recordFinished('ReactValtioString');
			logTotal('ReactValtio');
			setStart(null);
			setString10('');
		} else {
			setString10((value + 1).toString());
		}
	}, [ store10.value ]);

	return null;
}
