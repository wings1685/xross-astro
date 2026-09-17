/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useAtom } from "jotai";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function JotaiString07() {
	const { stringStore07 } = useReactStore('jotaiString07');
	const [ store07, setString07 ] = useAtom(stringStore07);
	const { stringStore08 } = useReactStore('jotaiString08');
	const [ _, setString08 ] = useAtom(stringStore08);

	useLayoutEffect(() => {
		const value = +store07;
		if (!value) return;

		setString07((value + 1).toString());
		if (value === dragRaceMax) {
			setString07('');
			setString08('1');
		}
	}, [ store07 ]);

	return null;
}
