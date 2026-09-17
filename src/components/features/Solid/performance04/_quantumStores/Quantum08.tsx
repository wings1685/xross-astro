import { createEffect, createMemo } from "solid-js";
import { logStore } from "@/_global/lib/performance04";
import { useStore } from "@/_global/piquo";

export default function Quantum08() {
	const { solidQuantum08, solidSetQuantum09 } = useStore('solidQuantum');

	const relayData = createMemo(() => {
		if (!solidQuantum08()) return 0;

		logStore();
		return solidQuantum08();
	});

	createEffect(() => {
		if (!relayData()) return;

		solidSetQuantum09(relayData());
	});

	return null;
}
