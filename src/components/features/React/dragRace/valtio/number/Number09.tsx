/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useSnapshot } from "valtio";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function ValtioNumber09() {
	const { numberStore09, setNumber09 } = useReactStore('valtioNumber09');
	const store09 = useSnapshot(numberStore09);
	const { setNumber10 } = useReactStore('valtioNumber10');

	useLayoutEffect(() => {
		if (!store09.value) return;

		setNumber09(store09.value + 1);
		if (store09.value === dragRaceMax) {
			setNumber09(0);
			setNumber10(1);
		}
	}, [ store09.value ]);

	return null;
}
