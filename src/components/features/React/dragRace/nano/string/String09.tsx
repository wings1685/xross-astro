/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useStore } from "@nanostores/react";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function NanoString09() {
	const { $stringStore09 } = useReactStore('nanoString09');
	const store09 = useStore($stringStore09, { ssr: 'initial' });
	const { $stringStore10 } = useReactStore('nanoString10');

	useLayoutEffect(() => {
		const value = +store09;
		if (!value) return;

		$stringStore09.set((value + 1).toString());
		if (value === dragRaceMax) {
			$stringStore09.set('');
			$stringStore10.set('1');
		}
	}, [ store09 ]);

	return null;
}
