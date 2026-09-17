import { createEffect } from "solid-js";
import { useStore } from "@/_global/piquo";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function SignalNumber06() {
	const { numberStore06, setNumber06 } = useStore('solidNumber06');
	const { setNumber07 } = useStore('solidNumber07');

	createEffect(() => {
		if (!numberStore06()) return;

		setNumber06(numberStore06() + 1);
		if (numberStore06() === dragRaceMax) {
			setNumber06(0);
			setNumber07(1);
		}
	});

	return null;
}
