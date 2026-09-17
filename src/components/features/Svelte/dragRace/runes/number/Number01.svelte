<script lang="ts">
	import { useStore } from "@/_global/piquo";
	import { recordStart, dragRaceMax } from "@/_global/lib/dragRace";

	const { startStore } = useStore('svelteStart');
	const { numberStore01, setNumber01 } = useStore('svelteNumber01');
	const { setNumber02 } = useStore('svelteNumber02');

	$effect(() => {
		if (startStore() !== 'number') return;

		recordStart('SvelteRunesNumber');
		setNumber01(1);
	});

	$effect(() => {
		if (!numberStore01()) return;

		setNumber01(numberStore01() + 1);
		if (numberStore01() === dragRaceMax) {
			setNumber01(0);
			setNumber02(1);
		}
	});
</script>
