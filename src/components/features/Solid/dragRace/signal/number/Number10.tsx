import { createEffect } from "solid-js";
import { useStore } from "@/_global/piquo";
import { dragRaceMax, recordFinished } from "@/_global/lib/dragRace";

export default function SignalNumber10() {
	const { numberStore10, setNumber10 } = useStore('solidNumber10');
	const { setStart } = useStore('solidStart');

	createEffect(() => {
		if (!numberStore10()) return;

		if (numberStore10() === dragRaceMax) {
			recordFinished('SolidSignalNumber');
			setNumber10(0);
			setStart('string');
		} else {
			setNumber10(numberStore10() + 1);
		}
	});

	return null;
}
