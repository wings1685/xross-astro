import { createEffect } from "solid-js";
import { useStore } from "@/_global/piquo";

export default function Quantum01() {
	const { solidQuantum01, solidSetQuantum02 } = useStore('solidQuantum');

	createEffect(() => {
		if (!solidQuantum01()) return;

		solidSetQuantum02(solidQuantum01());
	});

	return null;
}
