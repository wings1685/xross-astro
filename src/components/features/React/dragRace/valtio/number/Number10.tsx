/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useSnapshot } from "valtio";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax, recordFinished } from "@/_global/lib/dragRace";

export default function ValtioNumber10() {
	const { numberStore10, setNumber10 } = useReactStore('valtioNumber10');
	const store10 = useSnapshot(numberStore10);
	const { setStart } = useReactStore('valtioStart');

	useLayoutEffect(() => {
		if (!store10.value) return;

		if (store10.value === dragRaceMax) {
			recordFinished('ReactValtioNumber');
			setNumber10(0);
			setStart('string');
		} else {
			setNumber10(store10.value + 1);
		}
	}, [ store10.value ]);

	return null;
}
