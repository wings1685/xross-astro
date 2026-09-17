/** @jsxImportSource react */

import { useReactStore } from "../_models/stores";

export default function NanoStart() {
	const { $startStore } = useReactStore('nanoStart');

	const raceStart = () => {
		$startStore.set('number');
	};

	return (
		<fieldset>
			<button onClick={ raceStart }>Start React Nano Stores!!!</button>
		</fieldset>
	)
}
