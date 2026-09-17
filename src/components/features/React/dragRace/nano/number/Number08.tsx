/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useStore } from "@nanostores/react";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function NanoNumber08() {
	const { $numberStore08 } = useReactStore('nanoNumber08');
	const store08 = useStore($numberStore08, { ssr: 'initial' });
	const { $numberStore09 } = useReactStore('nanoNumber09');

	useLayoutEffect(() => {
		if (!store08) return;

		$numberStore08.set(store08 + 1);
		if (store08 === dragRaceMax) {
			$numberStore08.set(0);
			$numberStore09.set(1);
		}
	}, [ store08 ]);

	return null;
}
