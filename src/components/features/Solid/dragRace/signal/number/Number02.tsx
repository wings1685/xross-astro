import { createEffect } from "solid-js";
import { useStore } from "@/_global/piquo";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function SignalNumber02() {
	const { numberStore02, setNumber02 } = useStore('solidNumber02');
	const { setNumber03 } = useStore('solidNumber03');

	createEffect(() => {
		if (!numberStore02()) return;

		setNumber02(numberStore02() + 1);
		if (numberStore02() === dragRaceMax) {
			setNumber02(0);
			setNumber03(1);
		}
	});

	return null;
}
