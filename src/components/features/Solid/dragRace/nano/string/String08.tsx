import { createEffect } from "solid-js";
import { useStore } from "@nanostores/solid";
import { useNanoStore } from "../../_models/nano";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function NanoString08() {
	const { stringStore08 } = useNanoStore('nanoString08');
	const store = useStore(stringStore08);
	const { stringStore09 } = useNanoStore('nanoString09');

	createEffect(() => {
		const value = +store();
		if (!value) return;

		stringStore08.set((value + 1).toString());
		if (value === dragRaceMax) {
			stringStore08.set('');
			stringStore09.set('1');
		}
	});

	return null;
}
