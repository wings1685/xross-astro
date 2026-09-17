/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useSnapshot } from "valtio";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function ValtioString02() {
	const { stringStore02, setString02 } = useReactStore('valtioString02');
	const store02 = useSnapshot(stringStore02);
	const { setString03 } = useReactStore('valtioString03');

	useLayoutEffect(() => {
		const value = +store02.value;
		if (!value) return;

		setString02((value + 1).toString());
		if (value === dragRaceMax) {
			setString02('');
			setString03('1');
		}
	}, [ store02.value ]);

	return null;
}
