/** @jsxImportSource react */

import { useReactStore } from "../_models/stores";

export default function ValtioStart() {
	const { setStart } = useReactStore('valtioStart');

	const raceStart = () => {
		setStart('number');
	};

	return (
		<fieldset>
			<button onClick={ raceStart }>Start React Valtio!!!</button>
		</fieldset>
	)
}
