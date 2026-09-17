/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useStore } from "@nanostores/react";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax, recordFinished } from "@/_global/lib/dragRace";

export default function NanoNumber10() {
	const { $numberStore10 } = useReactStore('nanoNumber10');
	const store10 = useStore($numberStore10, { ssr: 'initial' });
	const { $startStore } = useReactStore('nanoStart');

	useLayoutEffect(() => {
		if (!store10) return;

		if (store10 === dragRaceMax) {
			recordFinished('ReactNanoNumber');
			$numberStore10.set(0);
			$startStore.set('string');
		} else {
			$numberStore10.set(store10 + 1);
		}
	}, [ store10 ]);

	return null;
}
