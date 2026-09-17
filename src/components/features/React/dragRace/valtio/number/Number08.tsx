/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useSnapshot } from "valtio";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function ValtioNumber08() {
	const { numberStore08, setNumber08 } = useReactStore('valtioNumber08');
	const store08 = useSnapshot(numberStore08);
	const { setNumber09 } = useReactStore('valtioNumber09');

	useLayoutEffect(() => {
		if (!store08.value) return;

		setNumber08(store08.value + 1);
		if (store08.value === dragRaceMax) {
			setNumber08(0);
			setNumber09(1);
		}
	}, [ store08.value ]);

	return null;
}
