/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useSnapshot } from "valtio";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function ValtioNumber06() {
	const { numberStore06, setNumber06 } = useReactStore('valtioNumber06');
	const store06 = useSnapshot(numberStore06);
	const { setNumber07 } = useReactStore('valtioNumber07');

	useLayoutEffect(() => {
		if (!store06.value) return;

		setNumber06(store06.value + 1);
		if (store06.value === dragRaceMax) {
			setNumber06(0);
			setNumber07(1);
		}
	}, [ store06.value ]);

	return null;
}
