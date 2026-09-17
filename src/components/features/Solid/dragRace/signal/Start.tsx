import { useStore } from "@/_global/piquo";

export default function Start() {
	const { setStart } = useStore('solidStart');

	const raceStart = () => {
		setStart('number');
	};

	return (
		<fieldset>
			<button onClick={ raceStart }>Start Solid Signal!!!</button>
		</fieldset>
	)
}
