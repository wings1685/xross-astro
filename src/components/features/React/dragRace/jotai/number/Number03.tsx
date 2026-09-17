/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useAtom } from "jotai";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function JotaiNumber03() {
	const { numberStore03 } = useReactStore('jotaiNumber03');
	const [ store03, setNumber03 ] = useAtom(numberStore03);
	const { numberStore04 } = useReactStore('jotaiNumber04');
	const [ _, setNumber04 ] = useAtom(numberStore04);

	useLayoutEffect(() => {
		if (!store03) return;

		setNumber03(store03 + 1);
		if (store03 === dragRaceMax) {
			setNumber03(0);
			setNumber04(1);
		}
	}, [ store03 ]);

	return null;
}
