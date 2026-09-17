/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useAtom } from "jotai";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax, recordFinished, logTotal } from "@/_global/lib/dragRace";

export default function JotaiString10() {
	const { stringStore10 } = useReactStore('jotaiString10');
	const [ store10, setString10 ] = useAtom(stringStore10);
	const { startStore } = useReactStore('jotaiStart');
	const [ start, setStart ] = useAtom(startStore);

	useLayoutEffect(() => {
		const value = +store10;
		if (!value) return;

		if (value === dragRaceMax) {
			recordFinished('ReactJotaiString');
			logTotal('ReactJotai');
			setStart(null);
			setString10('');
		} else {
			setString10((value + 1).toString());
		}
	}, [ store10 ]);

	return null;
}
