<script lang="ts">
	import { useStore } from "@nanostores/svelte-runes";
	import { useNanoStore } from "../../_models/nano";
	import { dragRaceMax, recordFinished, logTotal } from "@/_global/lib/dragRace";

	const { stringStore10 } = useNanoStore('nanoString10');
	const store = useStore(stringStore10);
	const { startStore } = useNanoStore('nanoStart');

	$effect(() => {
		const value = +store.current;
		if (!value) return;

		if (value === dragRaceMax) {
			recordFinished('SvelteNanoString');
			logTotal('SvelteNano');
			startStore.set(null);
			stringStore10.set('');
		} else {
			stringStore10.set((value + 1).toString());
		}
	});
</script>
