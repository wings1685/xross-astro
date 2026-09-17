import { createEffect } from "solid-js";
import { useStore } from "@nanostores/solid";
import { useNanoStore } from "../../_models/nano";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function NanoNumber06() {
	const { numberStore06 } = useNanoStore('nanoNumber06');
	const store = useStore(numberStore06);
	const { numberStore07 } = useNanoStore('nanoNumber07');

	createEffect(() => {
		if (!store()) return;

		numberStore06.set(store() + 1);
		if (store() === dragRaceMax) {
			numberStore06.set(0);
			numberStore07.set(1);
		}
	});

	return null;
}
