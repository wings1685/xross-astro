/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useAtom } from "jotai";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function JotaiNumber04() {
	const { numberStore04 } = useReactStore('jotaiNumber04');
	const [ store04, setNumber04 ] = useAtom(numberStore04);
	const { numberStore05 } = useReactStore('jotaiNumber05');
	const [ _, setNumber05 ] = useAtom(numberStore05);

	useLayoutEffect(() => {
		if (!store04) return;

		setNumber04(store04 + 1);
		if (store04 === dragRaceMax) {
			setNumber04(0);
			setNumber05(1);
		}
	}, [ store04 ]);

	return null;
}
