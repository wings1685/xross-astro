import { createEffect } from "solid-js";
import { useStore } from "@/_global/piquo";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function SignalString03() {
	const { stringStore03, setString03 } = useStore('solidString03');
	const { setString04 } = useStore('solidString04');

	createEffect(() => {
		const value = +stringStore03();
		if (!value) return;

		setString03((value + 1).toString());
		if (value === dragRaceMax) {
			setString03('');
			setString04('1');
		}
	});

	return null;
}
