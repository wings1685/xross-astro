/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useSnapshot } from "valtio";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function ValtioNumber02() {
	const { numberStore02, setNumber02 } = useReactStore('valtioNumber02');
	const store02 = useSnapshot(numberStore02);
	const { setNumber03 } = useReactStore('valtioNumber03');

	useLayoutEffect(() => {
		if (!store02.value) return;

		setNumber02(store02.value + 1);
		if (store02.value === dragRaceMax) {
			setNumber02(0);
			setNumber03(1);
		}
	}, [ store02.value ]);

	return null;
}
