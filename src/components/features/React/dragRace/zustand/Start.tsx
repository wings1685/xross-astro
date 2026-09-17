/** @jsxImportSource react */

import { useZustandStore } from "../_models/zustand";

export default function ZustandStart() {
	const { setStart } = useZustandStore('zustandStart');

	const raceStart = () => {
		setStart('number');
	};

	return (
		<fieldset>
			<button onClick={ raceStart }>Start React Zustand!!!</button>
		</fieldset>
	)
}
