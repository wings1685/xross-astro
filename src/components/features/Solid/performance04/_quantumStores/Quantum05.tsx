import { createEffect, createMemo } from "solid-js";
import { logStore } from "@/_global/lib/performance04";
import { useStore } from "@/_global/piquo";

export default function Quantum05() {
	const { solidQuantum05, solidSetQuantum06 } = useStore('solidQuantum');

	const relayData = createMemo(() => {
		if (!solidQuantum05()) return 0;

		logStore();
		return solidQuantum05();
	});

	createEffect(() => {
		if (!relayData()) return;

		solidSetQuantum06(relayData());
	});

	return null;
}
