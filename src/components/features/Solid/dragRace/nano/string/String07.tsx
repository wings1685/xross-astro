import { createEffect } from "solid-js";
import { useStore } from "@nanostores/solid";
import { useNanoStore } from "../../_models/nano";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function NanoString07() {
	const { stringStore07 } = useNanoStore('nanoString07');
	const store = useStore(stringStore07);
	const { stringStore08 } = useNanoStore('nanoString08');

	createEffect(() => {
		const value = +store();
		if (!value) return;

		stringStore07.set((value + 1).toString());
		if (value === dragRaceMax) {
			stringStore07.set('');
			stringStore08.set('1');
		}
	});

	return null;
}
