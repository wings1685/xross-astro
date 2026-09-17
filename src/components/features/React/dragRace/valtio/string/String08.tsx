/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useSnapshot } from "valtio";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function ValtioString08() {
	const { stringStore08, setString08 } = useReactStore('valtioString08');
	const store08 = useSnapshot(stringStore08);
	const { setString09 } = useReactStore('valtioString09');

	useLayoutEffect(() => {
		const value = +store08.value;
		if (!value) return;

		setString08((value + 1).toString());
		if (value === dragRaceMax) {
			setString08('');
			setString09('1');
		}
	}, [ store08.value ]);

	return null;
}
