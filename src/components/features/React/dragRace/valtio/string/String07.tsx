/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useSnapshot } from "valtio";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function ValtioString07() {
	const { stringStore07, setString07 } = useReactStore('valtioString07');
	const store07 = useSnapshot(stringStore07);
	const { setString08 } = useReactStore('valtioString08');

	useLayoutEffect(() => {
		const value = +store07.value;
		if (!value) return;

		setString07((value + 1).toString());
		if (value === dragRaceMax) {
			setString07('');
			setString08('1');
		}
	}, [ store07.value ]);

	return null;
}
