/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useStore } from "@nanostores/react";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function NanoString07() {
	const { $stringStore07 } = useReactStore('nanoString07');
	const store07 = useStore($stringStore07, { ssr: 'initial' });
	const { $stringStore08 } = useReactStore('nanoString08');

	useLayoutEffect(() => {
		const value = +store07;
		if (!value) return;

		$stringStore07.set((value + 1).toString());
		if (value === dragRaceMax) {
			$stringStore07.set('');
			$stringStore08.set('1');
		}
	}, [ store07 ]);

	return null;
}
