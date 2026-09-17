import { createEffect } from "solid-js";
import { useStore } from "@/_global/piquo";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function SignalNumber07() {
	const { numberStore07, setNumber07 } = useStore('solidNumber07');
	const { setNumber08 } = useStore('solidNumber08');

	createEffect(() => {
		if (!numberStore07()) return;

		setNumber07(numberStore07() + 1);
		if (numberStore07() === dragRaceMax) {
			setNumber07(0);
			setNumber08(1);
		}
	});

	return null;
}
