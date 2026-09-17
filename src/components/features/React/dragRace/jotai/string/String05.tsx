/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useAtom } from "jotai";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function JotaiString05() {
	const { stringStore05 } = useReactStore('jotaiString05');
	const [ store05, setString05 ] = useAtom(stringStore05);
	const { stringStore06 } = useReactStore('jotaiString06');
	const [ _, setString06 ] = useAtom(stringStore06);

	useLayoutEffect(() => {
		const value = +store05;
		if (!value) return;

		setString05((value + 1).toString());
		if (value === dragRaceMax) {
			setString05('');
			setString06('1');
		}
	}, [ store05 ]);

	return null;
}
