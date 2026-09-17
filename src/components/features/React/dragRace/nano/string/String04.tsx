/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useStore } from "@nanostores/react";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function NanoString04() {
	const { $stringStore04 } = useReactStore('nanoString04');
	const store04 = useStore($stringStore04, { ssr: 'initial' });
	const { $stringStore05 } = useReactStore('nanoString05');

	useLayoutEffect(() => {
		const value = +store04;
		if (!value) return;

		$stringStore04.set((value + 1).toString());
		if (value === dragRaceMax) {
			$stringStore04.set('');
			$stringStore05.set('1');
		}
	}, [ store04 ]);

	return null;
}
