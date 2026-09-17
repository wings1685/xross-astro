import { createEffect, createMemo } from "solid-js";
import { logStore } from "@/_global/lib/performance04";
import { useStore } from "@/_global/piquo";

export default function Quantum09() {
	const { solidQuantum09, solidSetQuantum10 } = useStore('solidQuantum');

	const relayData = createMemo(() => {
		if (!solidQuantum09()) return 0;

		logStore();
		return solidQuantum09();
	});

	createEffect(() => {
		if (!relayData()) return;

		solidSetQuantum10(relayData());
	});

	return null;
}
