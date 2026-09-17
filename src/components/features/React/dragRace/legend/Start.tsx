/** @jsxImportSource react */

import { useReactStore } from "../_models/stores";

export default function LegendStart() {
	const { startStore$ } = useReactStore('legendStart');

	const raceStart = () => {
		startStore$.set('number');
	};

	return (
		<fieldset>
			<button onClick={ raceStart }>Start React Legend State!!!</button>
		</fieldset>
	)
}
