/** @jsxImportSource react */

import { useStore } from "./_models/stores";

export default function QuantumStart() {
	const contextStart = useStore('contextStart');
	const quantumStart = useStore('quantumStart');

	const handleClick = () => {
		contextStart.setStore(1);
		quantumStart.setStore(1);
	};

	return (
		<fieldset>
			<button onClick={ handleClick }>50 連鎖スタート</button>
		</fieldset>
	)
}
