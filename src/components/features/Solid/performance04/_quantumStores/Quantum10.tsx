import { createEffect, createMemo } from "solid-js";
import { recordFinished, logStore } from "@/_global/lib/performance04";
import { useStore } from "@/_global/piquo";

export default function Quantum10() {
	const { solidQuantum10 } = useStore('solidQuantum');

	const relayData = createMemo(() => {
		if (!solidQuantum10()) return 0;

		logStore();
		return solidQuantum10();
	});

	createEffect(() => {
		if (!relayData()) return;

		recordFinished('Store');
		recordFinished('Race');
	});

	return null;
}
