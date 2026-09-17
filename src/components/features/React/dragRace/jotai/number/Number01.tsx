/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useAtom } from "jotai";
import { useReactStore } from "../../_models/stores";
import { recordStart, dragRaceMax } from "@/_global/lib/dragRace";

export default function JotaiNumber01() {
	const { startStore } = useReactStore('jotaiStart');
	const [ start ] = useAtom(startStore);
	const { numberStore01 } = useReactStore('jotaiNumber01');
	const [ store01, setNumber01 ] = useAtom(numberStore01);
	const { numberStore02 } = useReactStore('jotaiNumber02');
	const [ _, setNumber02 ] = useAtom(numberStore02);

	useLayoutEffect(() => {
		if (start !== 'number') return;

		recordStart('ReactJotaiNumber');
		setNumber01(1);
	}, [ start ]);

	useLayoutEffect(() => {
		if (!store01) return;

		setNumber01(store01 + 1);
		if (store01 === dragRaceMax) {
			setNumber01(0);
			setNumber02(1);
		}
	}, [ store01 ]);

	return null;
}
