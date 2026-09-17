import { createEffect } from "solid-js";
import { useStore } from "@nanostores/solid";
import { useNanoStore } from "../../_models/nano";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function NanoString09() {
	const { stringStore09 } = useNanoStore('nanoString09');
	const store = useStore(stringStore09);
	const { stringStore10 } = useNanoStore('nanoString10');

	createEffect(() => {
		const value = +store();
		if (!value) return;

		stringStore09.set((value + 1).toString());
		if (value === dragRaceMax) {
			stringStore09.set('');
			stringStore10.set('1');
		}
	});

	return null;
}
