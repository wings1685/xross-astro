/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useStore } from "@nanostores/react";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function NanoNumber05() {
	const { $numberStore05 } = useReactStore('nanoNumber05');
	const store05 = useStore($numberStore05, { ssr: 'initial' });
	const { $numberStore06 } = useReactStore('nanoNumber06');

	useLayoutEffect(() => {
		if (!store05) return;

		$numberStore05.set(store05 + 1);
		if (store05 === dragRaceMax) {
			$numberStore05.set(0);
			$numberStore06.set(1);
		}
	}, [ store05 ]);

	return null;
}
