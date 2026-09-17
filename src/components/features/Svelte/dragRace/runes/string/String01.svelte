<script lang="ts">
	import { useStore } from "@/_global/piquo";
	import { recordStart, dragRaceMax } from "@/_global/lib/dragRace";

	const { startStore } = useStore('svelteStart');
	const { stringStore01, setString01 } = useStore('svelteString01');
	const { setString02 } = useStore('svelteString02');

	$effect(() => {
		if (startStore() !== 'string') return;

		recordStart('SvelteRunesString');
		setString01('1');
	});

	$effect(() => {
		const value = +stringStore01();
		if (!value) return;

		setString01((value + 1).toString());
		if (value === dragRaceMax) {
			setString01('');
			setString02('1');
		}
	});
</script>
