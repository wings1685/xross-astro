/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useSnapshot } from "valtio";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function ValtioNumber04() {
	const { numberStore04, setNumber04 } = useReactStore('valtioNumber04');
	const store04 = useSnapshot(numberStore04);
	const { setNumber05 } = useReactStore('valtioNumber05');

	useLayoutEffect(() => {
		if (!store04.value) return;

		setNumber04(store04.value + 1);
		if (store04.value === dragRaceMax) {
			setNumber04(0);
			setNumber05(1);
		}
	}, [ store04.value ]);

	return null;
}
