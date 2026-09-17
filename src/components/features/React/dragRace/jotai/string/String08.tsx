/** @jsxImportSource react */

import { useLayoutEffect } from "react";
import { useAtom } from "jotai";
import { useReactStore } from "../../_models/stores";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function JotaiString08() {
	const { stringStore08 } = useReactStore('jotaiString08');
	const [ store08, setString08 ] = useAtom(stringStore08);
	const { stringStore09 } = useReactStore('jotaiString09');
	const [ _, setString09 ] = useAtom(stringStore09);

	useLayoutEffect(() => {
		const value = +store08;
		if (!value) return;

		setString08((value + 1).toString());
		if (value === dragRaceMax) {
			setString08('');
			setString09('1');
		}
	}, [ store08 ]);

	return null;
}
