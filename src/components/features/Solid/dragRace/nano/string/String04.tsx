import { createEffect } from "solid-js";
import { useStore } from "@nanostores/solid";
import { useNanoStore } from "../../_models/nano";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function NanoString04() {
	const { stringStore04 } = useNanoStore('nanoString04');
	const store = useStore(stringStore04);
	const { stringStore05 } = useNanoStore('nanoString05');

	createEffect(() => {
		const value = +store();
		if (!value) return;

		stringStore04.set((value + 1).toString());
		if (value === dragRaceMax) {
			stringStore04.set('');
			stringStore05.set('1');
		}
	});

	return null;
}
