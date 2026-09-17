/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useStore } from "@nanostores/react";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function NanoNumber02() {
	const { $numberStore02 } = useReactStore('nanoNumber02');
	const store02 = useStore($numberStore02, { ssr: 'initial' });
	const { $numberStore03 } = useReactStore('nanoNumber03');

	useLayoutEffect(() => {
		if (!store02) return;

		$numberStore02.set(store02 + 1);
		if (store02 === dragRaceMax) {
			$numberStore02.set(0);
			$numberStore03.set(1);
		}
	}, [ store02 ]);

	return null;
}
