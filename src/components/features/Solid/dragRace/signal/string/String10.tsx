import { createEffect } from "solid-js";
import { useStore } from "@/_global/piquo";
import { dragRaceMax, recordFinished, logTotal } from "@/_global/lib/dragRace";

export default function SignalString10() {
	const { stringStore10, setString10 } = useStore('solidString10');
	const { setStart } = useStore('solidStart');

	createEffect(() => {
		const value = +stringStore10();
		if (!value) return;

		if (value === dragRaceMax) {
			recordFinished('SolidSignalString');
			logTotal('SolidSignal');
			setStart(null);
			setString10('');
		} else {
			setString10((value + 1).toString());
		}
	});

	return null;
}
