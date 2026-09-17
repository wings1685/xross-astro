/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useStore } from "@nanostores/react";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function NanoString03() {
	const { $stringStore03 } = useReactStore('nanoString03');
	const store03 = useStore($stringStore03, { ssr: 'initial' });
	const { $stringStore04 } = useReactStore('nanoString04');

	useLayoutEffect(() => {
		const value = +store03;
		if (!value) return;

		$stringStore03.set((value + 1).toString());
		if (value === dragRaceMax) {
			$stringStore03.set('');
			$stringStore04.set('1');
		}
	}, [ store03 ]);

	return null;
}
