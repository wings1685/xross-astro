/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useAtom } from "jotai";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax, recordFinished } from "@/_global/lib/dragRace";

export default function JotaiNumber10() {
	const { numberStore10 } = useReactStore('jotaiNumber10');
	const [ store10, setNumber10 ] = useAtom(numberStore10);
	const { startStore } = useReactStore('jotaiStart');
	const [ _, setStart ] = useAtom(startStore);

	useLayoutEffect(() => {
		if (!store10) return;

		if (store10 === dragRaceMax) {
			recordFinished('ReactJotaiNumber');
			setNumber10(0);
			setStart('string');
		} else {
			setNumber10(store10 + 1);
		}
	}, [ store10 ]);

	return null;
}
