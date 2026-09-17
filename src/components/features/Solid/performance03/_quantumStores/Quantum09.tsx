import { createEffect } from "solid-js";
import { useStore } from "@/_global/piquo";

export default function Quantum09() {
	const { solidQuantum09, solidSetQuantum10 } = useStore('solidQuantum');

	createEffect(() => {
		if (!solidQuantum09()) return;

		solidSetQuantum10(solidQuantum09());
	});

	return null;
}
