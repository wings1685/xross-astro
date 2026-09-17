import { createEffect } from "solid-js";
import { useStore } from "@nanostores/solid";
import { useNanoStore } from "../../_models/nano";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function NanoString06() {
	const { stringStore06 } = useNanoStore('nanoString06');
	const store = useStore(stringStore06);
	const { stringStore07 } = useNanoStore('nanoString07');

	createEffect(() => {
		const value = +store();
		if (!value) return;

		stringStore06.set((value + 1).toString());
		if (value === dragRaceMax) {
			stringStore06.set('');
			stringStore07.set('1');
		}
	});

	return null;
}
