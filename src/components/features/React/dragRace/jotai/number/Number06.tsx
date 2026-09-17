/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useAtom } from "jotai";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function JotaiNumber06() {
	const { numberStore06 } = useReactStore('jotaiNumber06');
	const [ store06, setNumber06 ] = useAtom(numberStore06);
	const { numberStore07 } = useReactStore('jotaiNumber07');
	const [ _, setNumber07 ] = useAtom(numberStore07);

	useLayoutEffect(() => {
		if (!store06) return;

		setNumber06(store06 + 1);
		if (store06 === dragRaceMax) {
			setNumber06(0);
			setNumber07(1);
		}
	}, [ store06 ]);

	return null;
}
