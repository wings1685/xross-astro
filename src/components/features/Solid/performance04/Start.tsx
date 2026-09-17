import { recordStart } from "@/_global/lib/performance04";
import { useStore } from "@/_global/piquo";

export default function Start() {
	const { solidSetRaceId } = useStore('solidRaceId');

	const handleClick = () => {
		recordStart('Race');
		solidSetRaceId('Effect');
	};

	return (
		<fieldset>
			<button onClick={ handleClick }>レーススタート！</button>
		</fieldset>
	)
}
