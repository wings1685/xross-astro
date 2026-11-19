/** @jsxImportSource react */

import { useRef } from "react";
import { recordFinished, recordStart } from "@/_global/lib/performanceEvents";

export default function Events() {
	const elWhole = useRef<HTMLButtonElement | null>(null);
	const handleWhole = () => {
		const whole10 = () => { recordFinished('Whole'); };
		const whole09 = () => { whole10(); };
		const whole08 = () => { whole09(); };
		const whole07 = () => { whole08(); };
		const whole06 = () => { whole07(); };
		const whole05 = () => { whole06(); };
		const whole04 = () => { whole05(); };
		const whole03 = () => { whole04(); };
		const whole02 = () => { whole03(); };
		const whole01 = () => { whole02(); };
		whole01();
	};

	const elEntrance = useRef<HTMLButtonElement | null>(null);
	const entrance = () => {
		const entrance10 = () => { recordFinished('Entrance'); };
		const entrance09 = () => { entrance10(); };
		const entrance08 = () => { entrance09(); };
		const entrance07 = () => { entrance08(); };
		const entrance06 = () => { entrance07(); };
		const entrance05 = () => { entrance06(); };
		const entrance04 = () => { entrance05(); };
		const entrance03 = () => { entrance04(); };
		const entrance02 = () => { entrance03(); };
		const entrance01 = () => { entrance02(); };
		entrance01();
	};
	const handleEntrance = () => { entrance(); };

	const elDivision = useRef<HTMLButtonElement | null>(null);
	const division10 = () => { recordFinished('Division'); };
	const division09 = () => { division10(); };
	const division08 = () => { division09(); };
	const division07 = () => { division08(); };
	const division06 = () => { division07(); };
	const division05 = () => { division06(); };
	const division04 = () => { division05(); };
	const division03 = () => { division04(); };
	const division02 = () => { division03(); };
	const division01 = () => { division02(); };
	const handleDivision = () => { division01(); };

	const handleStart = () => {
		if (!elWhole.current || !elEntrance.current || !elDivision.current) return;

		recordStart('Whole');
		elWhole.current.click();

		recordStart('Entrance');
		elEntrance.current.click();

		recordStart('Division');
		elDivision.current.click();
	};

	return (
		<div id="react_events">
			<h1>React</h1>
			<fieldset>
				<button onClick={ handleStart }>Start!</button>
			</fieldset>
			<fieldset>
				<button ref={ elWhole } onClick={ handleWhole }>Whole</button>
			</fieldset>
			<fieldset>
				<button ref={ elEntrance } onClick={ handleEntrance }>Entrance</button>
			</fieldset>
			<fieldset>
				<button ref={ elDivision } onClick={ handleDivision }>Division</button>
			</fieldset>
		</div>
	)
};
