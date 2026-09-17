import { createEffect } from "solid-js";
import { useStore } from "@/_global/piquo";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function SignalString08() {
	const { stringStore08, setString08 } = useStore('solidString08');
	const { setString09 } = useStore('solidString09');

	createEffect(() => {
		const value = +stringStore08();
		if (!value) return;

		setString08((value + 1).toString());
		if (value === dragRaceMax) {
			setString08('');
			setString09('1');
		}
	});

	return null;
}
