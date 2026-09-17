/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useSnapshot } from "valtio";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function ValtioNumber03() {
	const { numberStore03, setNumber03 } = useReactStore('valtioNumber03');
	const store03 = useSnapshot(numberStore03);
	const { setNumber04 } = useReactStore('valtioNumber04');

	useLayoutEffect(() => {
		if (!store03.value) return;

		setNumber03(store03.value + 1);
		if (store03.value === dragRaceMax) {
			setNumber03(0);
			setNumber04(1);
		}
	}, [ store03.value ]);

	return null;
}
