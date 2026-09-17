<script lang="ts">
	import { useStore } from "@nanostores/svelte-runes";
	import { useNanoStore } from "../../_models/nano";
	import { dragRaceMax, recordFinished } from "@/_global/lib/dragRace";

	const { numberStore10 } = useNanoStore('nanoNumber10');
	const store = useStore(numberStore10);
	const { startStore } = useNanoStore('nanoStart');

	$effect(() => {
		if (!store.current) return;

		if (store.current === dragRaceMax) {
			recordFinished('SvelteNanoNumber');
			numberStore10.set(0);
			startStore.set('string');
		} else {
			numberStore10.set(store.current + 1);
		}
	});
</script>
