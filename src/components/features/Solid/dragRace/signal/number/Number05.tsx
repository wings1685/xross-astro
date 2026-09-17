import { createEffect } from "solid-js";
import { useStore } from "@/_global/piquo";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function SignalNumber05() {
	const { numberStore05, setNumber05 } = useStore('solidNumber05');
	const { setNumber06 } = useStore('solidNumber06');

	createEffect(() => {
		if (!numberStore05()) return;

		setNumber05(numberStore05() + 1);
		if (numberStore05() === dragRaceMax) {
			setNumber05(0);
			setNumber06(1);
		}
	});

	return null;
}
