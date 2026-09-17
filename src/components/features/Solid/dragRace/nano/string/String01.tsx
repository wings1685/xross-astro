import { createEffect } from "solid-js";
import { useStore } from "@nanostores/solid";
import { useNanoStore } from "../../_models/nano";
import { recordStart, dragRaceMax } from "@/_global/lib/dragRace";

export default function NanoString01() {
	const { startStore } = useNanoStore('nanoStart');
	const start = useStore(startStore);
	const { stringStore01 } = useNanoStore('nanoString01');
	const store = useStore(stringStore01);
	const { stringStore02 } = useNanoStore('nanoString02');

	createEffect(() => {
		if (start() !== 'string') return;

		recordStart('SolidNanoString');
		stringStore01.set('1');
	});

	createEffect(() => {
		const value = +store();
		if (!value) return;

		stringStore01.set((value + 1).toString());
		if (value === dragRaceMax) {
			stringStore01.set('');
			stringStore02.set('1');
		}
	});

	return null;
}
