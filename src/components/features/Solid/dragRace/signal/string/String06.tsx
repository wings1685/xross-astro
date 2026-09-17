import { createEffect } from "solid-js";
import { useStore } from "@/_global/piquo";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function SignalString06() {
	const { stringStore06, setString06 } = useStore('solidString06');
	const { setString07 } = useStore('solidString07');

	createEffect(() => {
		const value = +stringStore06();
		if (!value) return;

		setString06((value + 1).toString());
		if (value === dragRaceMax) {
			setString06('');
			setString07('1');
		}
	});

	return null;
}
