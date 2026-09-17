/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useStore } from "@nanostores/react";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function NanoString05() {
	const { $stringStore05 } = useReactStore('nanoString05');
	const store05 = useStore($stringStore05, { ssr: 'initial' });
	const { $stringStore06 } = useReactStore('nanoString06');

	useLayoutEffect(() => {
		const value = +store05;
		if (!value) return;

		$stringStore05.set((value + 1).toString());
		if (value === dragRaceMax) {
			$stringStore05.set('');
			$stringStore06.set('1');
		}
	}, [ store05 ]);

	return null;
}
