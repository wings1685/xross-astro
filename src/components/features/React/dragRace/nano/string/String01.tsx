/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useStore } from "@nanostores/react";
import { useReactStore } from "../../_models/stores";
import { recordStart, dragRaceMax } from "@/_global/lib/dragRace";

export default function NanoString01() {
	const { $startStore } = useReactStore('nanoStart');
	const start = useStore($startStore, { ssr: 'initial' });
	const { $stringStore01 } = useReactStore('nanoString01');
	const store01 = useStore($stringStore01, { ssr: 'initial' });
	const { $stringStore02 } = useReactStore('nanoString02');

	useLayoutEffect(() => {
		if (start !== 'string') return;

		recordStart('ReactNanoString');
		$stringStore01.set('1');
	}, [ start ]);

	useLayoutEffect(() => {
		const value = +store01;
		if (!value) return;

		$stringStore01.set((value + 1).toString());
		if (value === dragRaceMax) {
			$stringStore01.set('');
			$stringStore02.set('1');
		}
	}, [ store01 ]);

	return null;
}
