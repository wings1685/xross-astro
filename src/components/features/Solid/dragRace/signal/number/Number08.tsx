import { createEffect } from "solid-js";
import { useStore } from "@/_global/piquo";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function SignalNumber08() {
	const { numberStore08, setNumber08 } = useStore('solidNumber08');
	const { setNumber09 } = useStore('solidNumber09');

	createEffect(() => {
		if (!numberStore08()) return;

		setNumber08(numberStore08() + 1);
		if (numberStore08() === dragRaceMax) {
			setNumber08(0);
			setNumber09(1);
		}
	});

	return null;
}
