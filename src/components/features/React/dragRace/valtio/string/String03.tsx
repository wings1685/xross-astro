/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useSnapshot } from "valtio";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function ValtioString03() {
	const { stringStore03, setString03 } = useReactStore('valtioString03');
	const store03 = useSnapshot(stringStore03);
	const { setString04 } = useReactStore('valtioString04');

	useLayoutEffect(() => {
		const value = +store03.value;
		if (!value) return;

		setString03((value + 1).toString());
		if (value === dragRaceMax) {
			setString03('');
			setString04('1');
		}
	}, [ store03.value ]);

	return null;
}
