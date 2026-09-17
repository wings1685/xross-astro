import { createEffect } from "solid-js";
import { useStore } from "@nanostores/solid";
import { useNanoStore } from "../../_models/nano";
import { dragRaceMax, recordFinished } from "@/_global/lib/dragRace";

export default function NanoNumber10() {
	const { numberStore10 } = useNanoStore('nanoNumber10');
	const store = useStore(numberStore10);
	const { startStore } = useNanoStore('nanoStart');

	createEffect(() => {
		if (!store()) return;

		if (store() === dragRaceMax) {
			recordFinished('SolidNanoNumber');
			numberStore10.set(0);
			startStore.set('string');
		} else {
			numberStore10.set(store() + 1);
		}
	});

	return null;
}
