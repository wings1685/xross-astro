/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useAtom } from "jotai";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function JotaiNumber08() {
	const { numberStore08 } = useReactStore('jotaiNumber08');
	const [ store08, setNumber08 ] = useAtom(numberStore08);
	const { numberStore09 } = useReactStore('jotaiNumber09');
	const [ _, setNumber09 ] = useAtom(numberStore09);

	useLayoutEffect(() => {
		if (!store08) return;

		setNumber08(store08 + 1);
		if (store08 === dragRaceMax) {
			setNumber08(0);
			setNumber09(1);
		}
	}, [ store08 ]);

	return null;
}
