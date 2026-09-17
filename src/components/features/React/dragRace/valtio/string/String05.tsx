/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useSnapshot } from "valtio";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function ValtioString05() {
	const { stringStore05, setString05 } = useReactStore('valtioString05');
	const store05 = useSnapshot(stringStore05);
	const { setString06 } = useReactStore('valtioString06');

	useLayoutEffect(() => {
		const value = +store05.value;
		if (!value) return;

		setString05((value + 1).toString());
		if (value === dragRaceMax) {
			setString05('');
			setString06('1');
		}
	}, [ store05.value ]);

	return null;
}
