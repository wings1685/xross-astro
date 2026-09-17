import { createEffect } from "solid-js";
import { useStore } from "@/_global/piquo";

export default function Quantum04() {
	const { solidQuantum04, solidSetQuantum05 } = useStore('solidQuantum');

	createEffect(() => {
		if (!solidQuantum04()) return;

		solidSetQuantum05(solidQuantum04());
	});

	return null;
}
