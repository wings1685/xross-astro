/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useStore } from "@nanostores/react";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function NanoNumber06() {
	const { $numberStore06 } = useReactStore('nanoNumber06');
	const store06 = useStore($numberStore06, { ssr: 'initial' });
	const { $numberStore07 } = useReactStore('nanoNumber07');

	useLayoutEffect(() => {
		if (!store06) return;

		$numberStore06.set(store06 + 1);
		if (store06 === dragRaceMax) {
			$numberStore06.set(0);
			$numberStore07.set(1);
		}
	}, [ store06 ]);

	return null;
}
