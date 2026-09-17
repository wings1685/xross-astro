/** @jsxImportSource react */

import { useReactStore } from "../_models/stores";

export default function UsesStart() {
	const start = useReactStore('usesStart');

	const raceStart = () => {
		start.set('number');
	};

	return (
		<fieldset>
			<button onClick={ raceStart }>Start React uSES!!!</button>
		</fieldset>
	)
}
