import { createEffect } from "solid-js";
import { useStore } from "@nanostores/solid";
import { useNanoStore } from "../../_models/nano";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function NanoNumber08() {
	const { numberStore08 } = useNanoStore('nanoNumber08');
	const store = useStore(numberStore08);
	const { numberStore09 } = useNanoStore('nanoNumber09');

	createEffect(() => {
		if (!store()) return;

		numberStore08.set(store() + 1);
		if (store() === dragRaceMax) {
			numberStore08.set(0);
			numberStore09.set(1);
		}
	});

	return null;
}
