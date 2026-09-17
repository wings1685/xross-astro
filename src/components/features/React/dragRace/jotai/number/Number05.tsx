/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useAtom } from "jotai";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function JotaiNumber05() {
	const { numberStore05 } = useReactStore('jotaiNumber05');
	const [ store05, setNumber05 ] = useAtom(numberStore05);
	const { numberStore06 } = useReactStore('jotaiNumber06');
	const [ _, setNumber06 ] = useAtom(numberStore06);

	useLayoutEffect(() => {
		if (!store05) return;

		setNumber05(store05 + 1);
		if (store05 === dragRaceMax) {
			setNumber05(0);
			setNumber06(1);
		}
	}, [ store05 ]);

	return null;
}
