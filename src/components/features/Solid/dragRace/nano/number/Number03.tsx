import { createEffect } from "solid-js";
import { useStore } from "@nanostores/solid";
import { useNanoStore } from "../../_models/nano";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function NanoNumber03() {
	const { numberStore03 } = useNanoStore('nanoNumber03');
	const store = useStore(numberStore03);
	const { numberStore04 } = useNanoStore('nanoNumber04');

	createEffect(() => {
		if (!store()) return;

		numberStore03.set(store() + 1);
		if (store() === dragRaceMax) {
			numberStore03.set(0);
			numberStore04.set(1);
		}
	});

	return null;
}
