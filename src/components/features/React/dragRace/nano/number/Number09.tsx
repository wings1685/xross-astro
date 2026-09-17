/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useStore } from "@nanostores/react";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function NanoNumber09() {
	const { $numberStore09 } = useReactStore('nanoNumber09');
	const store09 = useStore($numberStore09, { ssr: 'initial' });
	const { $numberStore10 } = useReactStore('nanoNumber10');

	useLayoutEffect(() => {
		if (!store09) return;

		$numberStore09.set(store09 + 1);
		if (store09 === dragRaceMax) {
			$numberStore09.set(0);
			$numberStore10.set(1);
		}
	}, [ store09 ]);

	return null;
}
