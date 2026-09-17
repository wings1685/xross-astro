import { createEffect, createMemo } from "solid-js";
import { logStore } from "@/_global/lib/performance04";
import { useStore } from "@/_global/piquo";

export default function Quantum03() {
	const { solidQuantum03, solidSetQuantum04 } = useStore('solidQuantum');

	const relayData = createMemo(() => {
		if (!solidQuantum03()) return 0;

		logStore();
		return solidQuantum03();
	});

	createEffect(() => {
		if (!relayData()) return;

		solidSetQuantum04(relayData());
	});

	return null;
}
