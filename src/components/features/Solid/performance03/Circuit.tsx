import { useStore } from "@/_global/piquo";

export default function Circuit() {
	const { solidRaceNo, solidSetRaceNo } = useStore('solidRaceNo');

	const handleClick = () => {
		solidSetRaceNo(solidRaceNo() + 1);
	};

	return (
		<fieldset>
			<button onClick={ handleClick }>10 連鎖スタート</button>
		</fieldset>
	)
}
