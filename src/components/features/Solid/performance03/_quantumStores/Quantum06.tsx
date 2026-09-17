import { createEffect } from "solid-js";
import { useStore } from "@/_global/piquo";

export default function Quantum06() {
	const { solidQuantum06, solidSetQuantum07 } = useStore('solidQuantum');

	createEffect(() => {
		if (!solidQuantum06()) return;

		solidSetQuantum07(solidQuantum06());
	});

	return null;
}
