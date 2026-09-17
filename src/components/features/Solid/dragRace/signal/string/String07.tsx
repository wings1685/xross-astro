import { createEffect } from "solid-js";
import { useStore } from "@/_global/piquo";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function SignalString07() {
	const { stringStore07, setString07 } = useStore('solidString07');
	const { setString08 } = useStore('solidString08');

	createEffect(() => {
		const value = +stringStore07();
		if (!value) return;

		setString07((value + 1).toString());
		if (value === dragRaceMax) {
			setString07('');
			setString08('1');
		}
	});

	return null;
}
