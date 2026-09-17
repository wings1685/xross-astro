import { createEffect } from "solid-js";
import { useStore } from "@nanostores/solid";
import { useNanoStore } from "../../_models/nano";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function NanoNumber02() {
	const { numberStore02 } = useNanoStore('nanoNumber02');
	const store = useStore(numberStore02);
	const { numberStore03 } = useNanoStore('nanoNumber03');

	createEffect(() => {
		if (!store()) return;

		numberStore02.set(store() + 1);
		if (store() === dragRaceMax) {
			numberStore02.set(0);
			numberStore03.set(1);
		}
	});

	return null;
}
