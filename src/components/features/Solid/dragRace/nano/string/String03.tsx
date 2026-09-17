import { createEffect } from "solid-js";
import { useStore } from "@nanostores/solid";
import { useNanoStore } from "../../_models/nano";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function NanoString03() {
	const { stringStore03 } = useNanoStore('nanoString03');
	const store = useStore(stringStore03);
	const { stringStore04 } = useNanoStore('nanoString04');

	createEffect(() => {
		const value = +store();
		if (!value) return;

		stringStore03.set((value + 1).toString());
		if (value === dragRaceMax) {
			stringStore03.set('');
			stringStore04.set('1');
		}
	});

	return null;
}
