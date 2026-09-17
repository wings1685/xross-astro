<script lang="ts">
	import { useStore } from "@nanostores/svelte-runes";
	import { useNanoStore } from "../../_models/nano";
	import { recordStart, dragRaceMax } from "@/_global/lib/dragRace";

	const { startStore } = useNanoStore('nanoStart');
	const start = useStore(startStore);
	const { stringStore01 } = useNanoStore('nanoString01');
	const store = useStore(stringStore01);
	const { stringStore02 } = useNanoStore('nanoString02');

	$effect(() => {
		if (start.current !== 'string') return;

		recordStart('SvelteNanoString');
		stringStore01.set('1');
	});

	$effect(() => {
		const value = +store.current;
		if (!value) return;

		stringStore01.set((value + 1).toString());
		if (value === dragRaceMax) {
			stringStore01.set('');
			stringStore02.set('1');
		}
	});
</script>
