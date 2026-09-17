/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useSnapshot } from "valtio";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function ValtioNumber07() {
	const { numberStore07, setNumber07 } = useReactStore('valtioNumber07');
	const store07 = useSnapshot(numberStore07);
	const { setNumber08 } = useReactStore('valtioNumber08');

	useLayoutEffect(() => {
		if (!store07.value) return;

		setNumber07(store07.value + 1);
		if (store07.value === dragRaceMax) {
			setNumber07(0);
			setNumber08(1);
		}
	}, [ store07.value ]);

	return null;
}
