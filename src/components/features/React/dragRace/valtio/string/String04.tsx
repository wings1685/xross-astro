/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useSnapshot } from "valtio";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function ValtioString04() {
	const { stringStore04, setString04 } = useReactStore('valtioString04');
	const store04 = useSnapshot(stringStore04);
	const { setString05 } = useReactStore('valtioString05');

	useLayoutEffect(() => {
		const value = +store04.value;
		if (!value) return;

		setString04((value + 1).toString());
		if (value === dragRaceMax) {
			setString04('');
			setString05('1');
		}
	}, [ store04.value ]);

	return null;
}
