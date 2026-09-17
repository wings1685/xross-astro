import { createEffect } from "solid-js";
import { useStore } from "@/_global/piquo";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function SignalNumber09() {
	const { numberStore09, setNumber09 } = useStore('solidNumber09');
	const { setNumber10 } = useStore('solidNumber10');

	createEffect(() => {
		if (!numberStore09()) return;

		setNumber09(numberStore09() + 1);
		if (numberStore09() === dragRaceMax) {
			setNumber09(0);
			setNumber10(1);
		}
	});

	return null;
}
