import { createEffect, createMemo } from "solid-js";
import { logStore } from "@/_global/lib/performance04";
import { useStore } from "@/_global/piquo";

export default function Quantum06() {
	const { solidQuantum06, solidSetQuantum07 } = useStore('solidQuantum');

	const relayData = createMemo(() => {
		if (!solidQuantum06()) return 0;

		logStore();
		return solidQuantum06();
	});

	createEffect(() => {
		if (!relayData()) return;

		solidSetQuantum07(relayData());
	});

	return null;
}
