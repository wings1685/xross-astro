/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useStore } from "@nanostores/react";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function NanoNumber07() {
	const { $numberStore07 } = useReactStore('nanoNumber07');
	const store07 = useStore($numberStore07, { ssr: 'initial' });
	const { $numberStore08 } = useReactStore('nanoNumber08');

	useLayoutEffect(() => {
		if (!store07) return;

		$numberStore07.set(store07 + 1);
		if (store07 === dragRaceMax) {
			$numberStore07.set(0);
			$numberStore08.set(1);
		}
	}, [ store07 ]);

	return null;
}
