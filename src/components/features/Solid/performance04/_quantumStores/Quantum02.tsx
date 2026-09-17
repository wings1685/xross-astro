import { createEffect, createMemo } from "solid-js";
import { logStore } from "@/_global/lib/performance04";
import { useStore } from "@/_global/piquo";

export default function Quantum02() {
	const { solidQuantum02, solidSetQuantum03 } = useStore('solidQuantum');

	const relayData = createMemo(() => {
		if (!solidQuantum02()) return 0;

		logStore();
		return solidQuantum02();
	});

	createEffect(() => {
		if (!relayData()) return;

		solidSetQuantum03(relayData());
	});

	return null;
}
