import { createEffect } from "solid-js";
import { useStore } from "@/_global/piquo";
import { dragRaceMax } from "@/_global/lib/dragRace";

export default function SignalString02() {
	const { stringStore02, setString02 } = useStore('solidString02');
	const { setString03 } = useStore('solidString03');

	createEffect(() => {
		const value = +stringStore02();
		if (!value) return;

		setString02((value + 1).toString());
		if (value === dragRaceMax) {
			setString02('');
			setString03('1');
		}
	});

	return null;
}
