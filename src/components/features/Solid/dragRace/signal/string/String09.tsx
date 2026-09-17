import { createEffect } from "solid-js";
import { useStore } from "@/_global/piquo";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function SignalString09() {
	const { stringStore09, setString09 } = useStore('solidString09');
	const { setString10 } = useStore('solidString10');

	createEffect(() => {
		const value = +stringStore09();
		if (!value) return;

		setString09((value + 1).toString());
		if (value === dragRaceMax) {
			setString09('');
			setString10('1');
		}
	});

	return null;
}
