import { createEffect } from "solid-js";
import { useStore } from "@nanostores/solid";
import { useNanoStore } from "../../_models/nano";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function NanoNumber05() {
	const { numberStore05 } = useNanoStore('nanoNumber05');
	const store = useStore(numberStore05);
	const { numberStore06 } = useNanoStore('nanoNumber06');

	createEffect(() => {
		if (!store()) return;

		numberStore05.set(store() + 1);
		if (store() === dragRaceMax) {
			numberStore05.set(0);
			numberStore06.set(1);
		}
	});

	return null;
}
