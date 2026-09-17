import { createEffect } from "solid-js";
import { useStore } from "@nanostores/solid";
import { useNanoStore } from "../../_models/nano";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function NanoNumber07() {
	const { numberStore07 } = useNanoStore('nanoNumber07');
	const store = useStore(numberStore07);
	const { numberStore08 } = useNanoStore('nanoNumber08');

	createEffect(() => {
		if (!store()) return;

		numberStore07.set(store() + 1);
		if (store() === dragRaceMax) {
			numberStore07.set(0);
			numberStore08.set(1);
		}
	});

	return null;
}
