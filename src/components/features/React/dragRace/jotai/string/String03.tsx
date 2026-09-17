/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useAtom } from "jotai";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function JotaiString03() {
	const { stringStore03 } = useReactStore('jotaiString03');
	const [ store03, setString03 ] = useAtom(stringStore03);
	const { stringStore04 } = useReactStore('jotaiString04');
	const [ _, setString04 ] = useAtom(stringStore04);

	useLayoutEffect(() => {
		const value = +store03;
		if (!value) return;

		setString03((value + 1).toString());
		if (value === dragRaceMax) {
			setString03('');
			setString04('1');
		}
	}, [ store03 ]);

	return null;
}
