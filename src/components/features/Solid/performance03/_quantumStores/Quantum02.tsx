import { createEffect } from "solid-js";
import { useStore } from "@/_global/piquo";

export default function Quantum02() {
	const { solidQuantum02, solidSetQuantum03 } = useStore('solidQuantum');

	createEffect(() => {
		if (!solidQuantum02()) return;

		solidSetQuantum03(solidQuantum02());
	});

	return null;
}
