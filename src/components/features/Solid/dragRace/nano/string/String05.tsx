import { createEffect } from "solid-js";
import { useStore } from "@nanostores/solid";
import { useNanoStore } from "../../_models/nano";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function NanoString05() {
	const { stringStore05 } = useNanoStore('nanoString05');
	const store = useStore(stringStore05);
	const { stringStore06 } = useNanoStore('nanoString06');

	createEffect(() => {
		const value = +store();
		if (!value) return;

		stringStore05.set((value + 1).toString());
		if (value === dragRaceMax) {
			stringStore05.set('');
			stringStore06.set('1');
		}
	});

	return null;
}
