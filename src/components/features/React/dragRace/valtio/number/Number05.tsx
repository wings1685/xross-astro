/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useSnapshot } from "valtio";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function ValtioNumber05() {
	const { numberStore05, setNumber05 } = useReactStore('valtioNumber05');
	const store05 = useSnapshot(numberStore05);
	const { setNumber06 } = useReactStore('valtioNumber06');

	useLayoutEffect(() => {
		if (!store05.value) return;

		setNumber05(store05.value + 1);
		if (store05.value === dragRaceMax) {
			setNumber05(0);
			setNumber06(1);
		}
	}, [ store05.value ]);

	return null;
}
