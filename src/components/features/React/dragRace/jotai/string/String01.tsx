/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useAtom } from "jotai";
import { useReactStore } from "../../_models/stores";
import { recordStart, dragRaceMax } from "@/_global/lib/dragRace";

export default function JotaiString01() {
	const { startStore } = useReactStore('jotaiStart');
	const [ start ] = useAtom(startStore);
	const { stringStore01 } = useReactStore('jotaiString01');
	const [ store01, setString01 ] = useAtom(stringStore01);
	const { stringStore02 } = useReactStore('jotaiString02');
	const [ _, setString02 ] = useAtom(stringStore02);

	useLayoutEffect(() => {
		if (start !== 'string') return;

		recordStart('ReactJotaiString');
		setString01('1');
	}, [ start ]);

	useLayoutEffect(() => {
		const value = +store01;
		if (!value) return;

		setString01((value + 1).toString());
		if (value === dragRaceMax) {
			setString01('');
			setString02('1');
		}
	}, [ store01 ]);

	return null;
}
