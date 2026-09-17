/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useStore } from "@nanostores/react";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax, recordFinished, logTotal } from "@/_global/lib/dragRace";

export default function NanoString10() {
	const { $stringStore10 } = useReactStore('nanoString10');
	const store10 = useStore($stringStore10, { ssr: 'initial' });
	const { $startStore } = useReactStore('nanoStart');

	useLayoutEffect(() => {
		const value = +store10;
		if (!value) return;

		if (value === dragRaceMax) {
			recordFinished('ReactNanoString');
			logTotal('ReactNano');
			$startStore.set(null);
			$stringStore10.set('');
		} else {
			$stringStore10.set((value + 1).toString());
		}
	}, [ store10 ]);

	return null;
}
