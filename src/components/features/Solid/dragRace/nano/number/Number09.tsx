import { createEffect } from "solid-js";
import { useStore } from "@nanostores/solid";
import { useNanoStore } from "../../_models/nano";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function NanoNumber09() {
	const { numberStore09 } = useNanoStore('nanoNumber09');
	const store = useStore(numberStore09);
	const { numberStore10 } = useNanoStore('nanoNumber10');

	createEffect(() => {
		if (!store()) return;

		numberStore09.set(store() + 1);
		if (store() === dragRaceMax) {
			numberStore09.set(0);
			numberStore10.set(1);
		}
	});

	return null;
}
