import { createEffect } from "solid-js";
import { useStore } from "@/_global/piquo";

export default function Quantum07() {
	const { solidQuantum07, solidSetQuantum08 } = useStore('solidQuantum');

	createEffect(() => {
		if (!solidQuantum07()) return;

		solidSetQuantum08(solidQuantum07());
	});

	return null;
}
