import { createEffect } from "solid-js";
import { useStore } from "@/_global/piquo";

export default function Quantum03() {
	const { solidQuantum03, solidSetQuantum04 } = useStore('solidQuantum');

	createEffect(() => {
		if (!solidQuantum03()) return;

		solidSetQuantum04(solidQuantum03());
	});

	return null;
}
