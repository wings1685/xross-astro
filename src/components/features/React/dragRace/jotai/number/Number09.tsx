/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useAtom } from "jotai";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function JotaiNumber09() {
	const { numberStore09 } = useReactStore('jotaiNumber09');
	const [ store09, setNumber09 ] = useAtom(numberStore09);
	const { numberStore10 } = useReactStore('jotaiNumber10');
	const [ _, setNumber10 ] = useAtom(numberStore10);

	useLayoutEffect(() => {
		if (!store09) return;

		setNumber09(store09 + 1);
		if (store09 === dragRaceMax) {
			setNumber09(0);
			setNumber10(1);
		}
	}, [ store09 ]);

	return null;
}
