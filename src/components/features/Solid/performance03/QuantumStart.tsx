import { useStore } from "@/_global/piquo";

export default function QuantumStart() {
	const { solidSetQuantumContextStart, solidSetQuantumStoreStart } = useStore('solidQuantum');

	const handleClick = () => {
		solidSetQuantumContextStart(1);
		solidSetQuantumStoreStart(1);
	};

	return (
		<fieldset>
			<button onClick={ handleClick }>50 連鎖スタート</button>
		</fieldset>
	)
}
