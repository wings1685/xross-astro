import { createEffect } from "solid-js";
import { useStore } from "@/_global/piquo";
import { recordStart, dragRaceMax } from "@/_global/lib/dragRace";

export default function SignalString01() {
	const { startStore } = useStore('solidStart');
	const { stringStore01, setString01 } = useStore('solidString01');
	const { setString02 } = useStore('solidString02');

	createEffect(() => {
		if (startStore() !== 'string') return;

		recordStart('SolidSignalString');
		setString01('1');
	});

	createEffect(() => {
		const value = +stringStore01();
		if (!value) return;

		setString01((value + 1).toString());
		if (value === dragRaceMax) {
			setString01('');
			setString02('1');
		}
	});

	return null;
}
