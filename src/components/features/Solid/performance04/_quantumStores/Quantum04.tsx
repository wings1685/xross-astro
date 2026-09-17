import { createEffect, createMemo } from "solid-js";
import { logStore } from "@/_global/lib/performance04";
import { useStore } from "@/_global/piquo";

export default function Quantum04() {
	const { solidQuantum04, solidSetQuantum05 } = useStore('solidQuantum');

	const relayData = createMemo(() => {
		if (!solidQuantum04()) return 0;

		logStore();
		return solidQuantum04();
	});

	createEffect(() => {
		if (!relayData()) return;

		solidSetQuantum05(relayData());
	});

	return null;
}
