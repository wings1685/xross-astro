/** @jsxImportSource react */

import { recordStart } from "@/_global/lib/performance04";
import { useStore } from "./_models/stores";

export default function Start() {
	const raceId = useStore('raceId');

	const handleClick = () => {
		recordStart('Race');
		raceId.setStore('Effect');
	};

	return (
		<fieldset>
			<button onClick={ handleClick }>レーススタート！</button>
		</fieldset>
	)
}
