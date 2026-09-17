/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useSnapshot } from "valtio";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function ValtioString06() {
	const { stringStore06, setString06 } = useReactStore('valtioString06');
	const store06 = useSnapshot(stringStore06);
	const { setString07 } = useReactStore('valtioString07');

	useLayoutEffect(() => {
		const value = +store06.value;
		if (!value) return;

		setString06((value + 1).toString());
		if (value === dragRaceMax) {
			setString06('');
			setString07('1');
		}
	}, [ store06.value ]);

	return null;
}
