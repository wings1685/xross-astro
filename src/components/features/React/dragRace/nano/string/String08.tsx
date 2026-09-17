/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useStore } from "@nanostores/react";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function NanoString08() {
	const { $stringStore08 } = useReactStore('nanoString08');
	const store08 = useStore($stringStore08, { ssr: 'initial' });
	const { $stringStore09 } = useReactStore('nanoString09');

	useLayoutEffect(() => {
		const value = +store08;
		if (!value) return;

		$stringStore08.set((value + 1).toString());
		if (value === dragRaceMax) {
			$stringStore08.set('');
			$stringStore09.set('1');
		}
	}, [ store08 ]);

	return null;
}
