import { createEffect } from "solid-js";
import { useStore } from "@nanostores/solid";
import { useNanoStore } from "../../_models/nano";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function NanoString02() {
	const { stringStore02 } = useNanoStore('nanoString02');
	const store = useStore(stringStore02);
	const { stringStore03 } = useNanoStore('nanoString03');

	createEffect(() => {
		const value = +store();
		if (!value) return;

		stringStore02.set((value + 1).toString());
		if (value === dragRaceMax) {
			stringStore02.set('');
			stringStore03.set('1');
		}
	});

	return null;
}
