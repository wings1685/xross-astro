import { createEffect, createMemo } from "solid-js";
import { logStore } from "@/_global/lib/performance04";
import { useStore } from "@/_global/piquo";

export default function Quantum07() {
	const { solidQuantum07, solidSetQuantum08 } = useStore('solidQuantum');

	const relayData = createMemo(() => {
		if (!solidQuantum07()) return 0;

		logStore();
		return solidQuantum07();
	});

	createEffect(() => {
		if (!relayData()) return;

		solidSetQuantum08(relayData());
	});

	return null;
}
