import { createEffect } from "solid-js";
import { useStore } from "@/_global/piquo";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function SignalString04() {
	const { stringStore04, setString04 } = useStore('solidString04');
	const { setString05 } = useStore('solidString05');

	createEffect(() => {
		const value = +stringStore04();
		if (!value) return;

		setString04((value + 1).toString());
		if (value === dragRaceMax) {
			setString04('');
			setString05('1');
		}
	});

	return null;
}
