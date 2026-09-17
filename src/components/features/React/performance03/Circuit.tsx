/** @jsxImportSource react */

import { useSyncExternalStore } from "react";
import { useStore } from "./_models/stores";

export default function Circuit() {
	const store = useStore('raceNo');
	const raceNoStore = useSyncExternalStore(store.subscribe, store.getSnapshot, store.getServerSnapshot);

	const handleClick = () => {
		store.setStore(raceNoStore + 1);
	};

	return (
		<fieldset>
			<button onClick={ handleClick }>10 連鎖スタート</button>
		</fieldset>
	)
}
