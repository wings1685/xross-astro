/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useAtom } from "jotai";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function JotaiNumber07() {
	const { numberStore07 } = useReactStore('jotaiNumber07');
	const [ store07, setNumber07 ] = useAtom(numberStore07);
	const { numberStore08 } = useReactStore('jotaiNumber08');
	const [ _, setNumber08 ] = useAtom(numberStore08);

	useLayoutEffect(() => {
		if (!store07) return;

		setNumber07(store07 + 1);
		if (store07 === dragRaceMax) {
			setNumber07(0);
			setNumber08(1);
		}
	}, [ store07 ]);

	return null;
}
