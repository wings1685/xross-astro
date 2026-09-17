import { createEffect } from "solid-js";
import { useStore } from "@/_global/piquo";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function SignalNumber03() {
	const { numberStore03, setNumber03 } = useStore('solidNumber03');
	const { setNumber04 } = useStore('solidNumber04');

	createEffect(() => {
		if (!numberStore03()) return;

		setNumber03(numberStore03() + 1);
		if (numberStore03() === dragRaceMax) {
			setNumber03(0);
			setNumber04(1);
		}
	});

	return null;
}
