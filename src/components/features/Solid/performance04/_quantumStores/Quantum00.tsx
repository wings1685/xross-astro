import { createEffect } from "solid-js";
import { useStore } from "@/_global/piquo";
import { recordStart } from "@/_global/lib/performance04";

export default function Quantum00() {
	const { solidRaceId } = useStore('solidRaceId');
	const { solidSetQuantum01 } = useStore('solidQuantum');

	let num = 0;

	createEffect(() => {
		if (solidRaceId() !== 'Store') return;

		recordStart('Store');
		solidSetQuantum01(num + 1);
		num++;
	});

	return null;
}
