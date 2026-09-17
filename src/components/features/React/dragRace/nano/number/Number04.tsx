/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useStore } from "@nanostores/react";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function NanoNumber04() {
	const { $numberStore04 } = useReactStore('nanoNumber04');
	const store04 = useStore($numberStore04, { ssr: 'initial' });
	const { $numberStore05 } = useReactStore('nanoNumber05');

	useLayoutEffect(() => {
		if (!store04) return;

		$numberStore04.set(store04 + 1);
		if (store04 === dragRaceMax) {
			$numberStore04.set(0);
			$numberStore05.set(1);
		}
	}, [ store04 ]);

	return null;
}
