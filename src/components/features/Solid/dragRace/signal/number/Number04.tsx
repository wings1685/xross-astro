import { createEffect } from "solid-js";
import { useStore } from "@/_global/piquo";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function SignalNumber04() {
	const { numberStore04, setNumber04 } = useStore('solidNumber04');
	const { setNumber05 } = useStore('solidNumber05');

	createEffect(() => {
		if (!numberStore04()) return;

		setNumber04(numberStore04() + 1);
		if (numberStore04() === dragRaceMax) {
			setNumber04(0);
			setNumber05(1);
		}
	});

	return null;
}
