<script lang="ts">
	import { useStore } from "@/_global/piquo";
	import { dragRaceMax, recordFinished } from "@/_global/lib/dragRace";

	const { numberStore10, setNumber10 } = useStore('svelteNumber10');
	const { setStart } = useStore('svelteStart');

	$effect(() => {
		if (!numberStore10()) return;

		if (numberStore10() === dragRaceMax) {
			recordFinished('SvelteRunesNumber');
			setNumber10(0);
			setStart('string');
		} else {
			setNumber10(numberStore10() + 1);
		}
	});
</script>
