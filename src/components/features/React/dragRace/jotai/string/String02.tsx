/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useAtom } from "jotai";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function JotaiString02() {
	const { stringStore02 } = useReactStore('jotaiString02');
	const [ store02, setString02 ] = useAtom(stringStore02);
	const { stringStore03 } = useReactStore('jotaiString03');
	const [ _, setString03 ] = useAtom(stringStore03);

	useLayoutEffect(() => {
		const value = +store02;
		if (!value) return;

		setString02((value + 1).toString());
		if (value === dragRaceMax) {
			setString02('');
			setString03('1');
		}
	}, [ store02 ]);

	return null;
}
