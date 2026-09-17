/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useAtom } from "jotai";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function JotaiString06() {
	const { stringStore06 } = useReactStore('jotaiString06');
	const [ store06, setString06 ] = useAtom(stringStore06);
	const { stringStore07 } = useReactStore('jotaiString07');
	const [ _, setString07 ] = useAtom(stringStore07);

	useLayoutEffect(() => {
		const value = +store06;
		if (!value) return;

		setString06((value + 1).toString());
		if (value === dragRaceMax) {
			setString06('');
			setString07('1');
		}
	}, [ store06 ]);

	return null;
}
