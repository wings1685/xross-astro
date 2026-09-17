/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useStore } from "@nanostores/react";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function NanoString06() {
	const { $stringStore06 } = useReactStore('nanoString06');
	const store06 = useStore($stringStore06, { ssr: 'initial' });
	const { $stringStore07 } = useReactStore('nanoString07');

	useLayoutEffect(() => {
		const value = +store06;
		if (!value) return;

		$stringStore06.set((value + 1).toString());
		if (value === dragRaceMax) {
			$stringStore06.set('');
			$stringStore07.set('1');
		}
	}, [ store06 ]);

	return null;
}
