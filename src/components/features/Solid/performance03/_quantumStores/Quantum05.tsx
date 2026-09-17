import { createEffect } from "solid-js";
import { useStore } from "@/_global/piquo";

export default function Quantum05() {
	const { solidQuantum05, solidSetQuantum06 } = useStore('solidQuantum');

	createEffect(() => {
		if (!solidQuantum05()) return;

		solidSetQuantum06(solidQuantum05());
	});

	return null;
}
