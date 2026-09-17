/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useAtom } from "jotai";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function JotaiString09() {
	const { stringStore09 } = useReactStore('jotaiString09');
	const [ store09, setString09 ] = useAtom(stringStore09);
	const { stringStore10 } = useReactStore('jotaiString10');
	const [ _, setString10 ] = useAtom(stringStore10);

	useLayoutEffect(() => {
		const value = +store09;
		if (!value) return;

		setString09((value + 1).toString());
		if (value === dragRaceMax) {
			setString09('');
			setString10('1');
		}
	}, [ store09 ]);

	return null;
}
