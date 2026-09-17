import { createEffect } from "solid-js";
import { useStore } from "@nanostores/solid";
import { useNanoStore } from "../../_models/nano";
import { recordStart, dragRaceMax } from "@/_global/lib/dragRace";

export default function NanoNumber01() {
	const { startStore } = useNanoStore('nanoStart');
	const start = useStore(startStore);
	const { numberStore01 } = useNanoStore('nanoNumber01');
	const store = useStore(numberStore01);
	const { numberStore02 } = useNanoStore('nanoNumber02');

	createEffect(() => {
		if (start() !== 'number') return;

		recordStart('SolidNanoNumber');
		numberStore01.set(1);
	});

	createEffect(() => {
		if (!store()) return;

		numberStore01.set(store() + 1);
		if (store() === dragRaceMax) {
			numberStore01.set(0);
			numberStore02.set(1);
		}
	});

	return null;
}
