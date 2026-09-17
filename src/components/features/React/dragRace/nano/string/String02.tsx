/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useStore } from "@nanostores/react";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function NanoString02() {
	const { $stringStore02 } = useReactStore('nanoString02');
	const store02 = useStore($stringStore02, { ssr: 'initial' });
	const { $stringStore03 } = useReactStore('nanoString03');

	useLayoutEffect(() => {
		const value = +store02;
		if (!value) return;

		$stringStore02.set((value + 1).toString());
		if (value === dragRaceMax) {
			$stringStore02.set('');
			$stringStore03.set('1');
		}
	}, [ store02 ]);

	return null;
}
