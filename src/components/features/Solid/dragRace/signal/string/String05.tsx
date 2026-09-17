import { createEffect } from "solid-js";
import { useStore } from "@/_global/piquo";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function SignalString05() {
	const { stringStore05, setString05 } = useStore('solidString05');
	const { setString06 } = useStore('solidString06');

	createEffect(() => {
		const value = +stringStore05();
		if (!value) return;

		setString05((value + 1).toString());
		if (value === dragRaceMax) {
			setString05('');
			setString06('1');
		}
	});

	return null;
}
