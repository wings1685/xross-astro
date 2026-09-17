/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useAtom } from "jotai";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function JotaiString04() {
	const { stringStore04 } = useReactStore('jotaiString04');
	const [ store04, setString04 ] = useAtom(stringStore04);
	const { stringStore05 } = useReactStore('jotaiString05');
	const [ _, setString05 ] = useAtom(stringStore05);

	useLayoutEffect(() => {
		const value = +store04;
		if (!value) return;

		setString04((value + 1).toString());
		if (value === dragRaceMax) {
			setString04('');
			setString05('1');
		}
	}, [ store04 ]);

	return null;
}
