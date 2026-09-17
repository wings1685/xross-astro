/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useStore } from "@nanostores/react";
import { useReactStore } from "../../_models/stores";
import { recordStart, dragRaceMax } from "@/_global/lib/dragRace";

export default function NanoNumber01() {
	const { $startStore } = useReactStore('nanoStart');
	const start = useStore($startStore, { ssr: 'initial' });
	const { $numberStore01 } = useReactStore('nanoNumber01');
	const store01 = useStore($numberStore01, { ssr: 'initial' });
	const { $numberStore02 } = useReactStore('nanoNumber02');

	useLayoutEffect(() => {
		if (start !== 'number') return;

		recordStart('ReactNanoNumber');
		$numberStore01.set(1);
	}, [ start ]);

	useLayoutEffect(() => {
		if (!store01) return;

		$numberStore01.set(store01 + 1);
		if (store01 === dragRaceMax) {
			$numberStore01.set(0);
			$numberStore02.set(1);
		}
	}, [ store01 ]);

	return null;
}
