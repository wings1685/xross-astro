/** @jsxImportSource react */

import { useRef } from "react";
import { useStore } from "./_models/stores";
import "./Start.sass";

export default function Start() {
	const raceStart = useStore('raceStart');
	const start = useRef(0);

	const handleClick = () => {
		start.current++;
		raceStart.setStore(start.current);
	};

	return (
		<fieldset>
			<button onClick={ handleClick }>レーススタート！</button>
		</fieldset>
	)
}
