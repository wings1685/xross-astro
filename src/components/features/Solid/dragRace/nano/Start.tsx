import { useNanoStore } from "../_models/nano";

export default function Start() {
	const { startStore } = useNanoStore('nanoStart');

	const raceStart = () => {
		startStore.set('number');
	};
	return (
		<fieldset>
			<button onClick={ raceStart }>Start Solid Nano Stores!!!</button>
		</fieldset>
	)
}
