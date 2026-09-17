import { createEffect } from "solid-js";
import { useStore } from "@/_global/piquo";

export default function Quantum08() {
	const { solidQuantum08, solidSetQuantum09 } = useStore('solidQuantum');

	createEffect(() => {
		if (!solidQuantum08()) return;

		solidSetQuantum09(solidQuantum08());
	});

	return null;
}
