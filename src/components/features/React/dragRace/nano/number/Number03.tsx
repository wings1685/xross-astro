/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useStore } from "@nanostores/react";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function NanoNumber03() {
	const { $numberStore03 } = useReactStore('nanoNumber03');
	const store03 = useStore($numberStore03, { ssr: 'initial' });
	const { $numberStore04 } = useReactStore('nanoNumber04');

	useLayoutEffect(() => {
		if (!store03) return;

		$numberStore03.set(store03 + 1);
		if (store03 === dragRaceMax) {
			$numberStore03.set(0);
			$numberStore04.set(1);
		}
	}, [ store03 ]);

	return null;
}
