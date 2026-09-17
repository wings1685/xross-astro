/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useSnapshot } from "valtio";
import { useReactStore } from "../../_models/stores";
import { recordStart, dragRaceMax } from "@/_global/lib/dragRace";

export default function ValtioNumber01() {
	const { startStore } = useReactStore('valtioStart');
	const start = useSnapshot(startStore);
	const { numberStore01, setNumber01 } = useReactStore('valtioNumber01');
	const store01 = useSnapshot(numberStore01);
	const { setNumber02 } = useReactStore('valtioNumber02');

	useLayoutEffect(() => {
		if (start.value !== 'number') return;

		recordStart('ReactValtioNumber');
		setNumber01(1);
	}, [ start.value ]);

	useLayoutEffect(() => {
		if (!store01.value) return;

		setNumber01(store01.value + 1);
		if (store01.value === dragRaceMax) {
			setNumber01(0);
			setNumber02(1);
		}
	}, [ store01.value ]);

	return null;
}
