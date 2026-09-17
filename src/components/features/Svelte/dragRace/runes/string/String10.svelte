<script lang="ts">
	import { useStore } from "@/_global/piquo";
	import { dragRaceMax, recordFinished, logTotal } from "@/_global/lib/dragRace";

	const { stringStore10, setString10 } = useStore('svelteString10');
	const { setStart } = useStore('svelteStart');

	$effect(() => {
		const value = +stringStore10();
		if (!value) return;

		if (value === dragRaceMax) {
			recordFinished('SvelteRunesString');
			logTotal('SvelteRunes');
			setStart(null);
			setString10('');
		} else {
			setString10((value + 1).toString());
		}
	});
</script>
