import { createEffect } from "solid-js";
import { useStore } from "@nanostores/solid";
import { useNanoStore } from "../../_models/nano";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function NanoNumber04() {
	const { numberStore04 } = useNanoStore('nanoNumber04');
	const store = useStore(numberStore04);
	const { numberStore05 } = useNanoStore('nanoNumber05');

	createEffect(() => {
		if (!store()) return;

		numberStore04.set(store() + 1);
		if (store() === dragRaceMax) {
			numberStore04.set(0);
			numberStore05.set(1);
		}
	});

	return null;
}
