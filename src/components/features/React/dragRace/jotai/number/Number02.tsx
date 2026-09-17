/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useAtom } from "jotai";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function JotaiNumber02() {
	const { numberStore02 } = useReactStore('jotaiNumber02');
	const [ store02, setNumber02 ] = useAtom(numberStore02);
	const { numberStore03 } = useReactStore('jotaiNumber03');
	const [ _, setNumber03 ] = useAtom(numberStore03);

	useLayoutEffect(() => {
		if (!store02) return;

		setNumber02(store02 + 1);
		if (store02 === dragRaceMax) {
			setNumber02(0);
			setNumber03(1);
		}
	}, [ store02 ]);

	return null;
}
