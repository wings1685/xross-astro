import { createEffect } from "solid-js";
import { useStore } from "@/_global/piquo";
import { recordStart, dragRaceMax } from "@/_global/lib/dragRace";

export default function SignalNumber01() {
	const { startStore } = useStore('solidStart');
	const { numberStore01, setNumber01 } = useStore('solidNumber01');
	const { setNumber02 } = useStore('solidNumber02');

	createEffect(() => {
		if (startStore() !== 'number') return;

		recordStart('SolidSignalNumber');
		setNumber01(1);
	});

	createEffect(() => {
		if (!numberStore01()) return;

		setNumber01(numberStore01() + 1);
		if (numberStore01() === dragRaceMax) {
			setNumber01(0);
			setNumber02(1);
		}
	});

	return null;
}
