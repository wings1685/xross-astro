import { createEffect } from "solid-js";
import { useStore } from "@nanostores/solid";
import { useNanoStore } from "../../_models/nano";
import { dragRaceMax, recordFinished, logTotal } from "@/_global/lib/dragRace";

export default function NanoString10() {
	const { stringStore10 } = useNanoStore('nanoString10');
	const store = useStore(stringStore10);
	const { startStore } = useNanoStore('nanoStart');

	createEffect(() => {
		const value = +store();
		if (!value) return;

		if (value === dragRaceMax) {
			recordFinished('SolidNanoString');
			logTotal('SolidNano');
			startStore.set(null);
			stringStore10.set('');
		} else {
			stringStore10.set((value + 1).toString());
		}
	});

	return null;
}
