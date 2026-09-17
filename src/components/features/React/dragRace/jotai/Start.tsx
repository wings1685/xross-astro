/** @jsxImportSource react */

import { useAtom } from "jotai";
import { useReactStore } from "../_models/stores";

export default function JotaiStart() {
	const { startStore } = useReactStore('jotaiStart');
	const [ _, setStart ] = useAtom(startStore);

	const raceStart = () => {
		setStart('number');
	};

	return (
		<fieldset>
			<button onClick={ raceStart }>Start React Jotai!!!</button>
		</fieldset>
	)
}
