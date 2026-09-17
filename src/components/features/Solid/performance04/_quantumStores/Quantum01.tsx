import { createEffect, createMemo } from "solid-js";
import { logStore } from "@/_global/lib/performance04";
import { useStore } from "@/_global/piquo";

export default function Quantum01() {
	const { solidQuantum01, solidSetQuantum02 } = useStore('solidQuantum');

	const relayData = createMemo(() => {
		if (!solidQuantum01()) return 0;

		logStore();
		return solidQuantum01();
	});

	createEffect(() => {
		if (!relayData()) return;

		solidSetQuantum02(relayData());
	});

	return null;
}
