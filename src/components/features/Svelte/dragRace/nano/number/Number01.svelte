<script lang="ts">
	import { useStore } from "@nanostores/svelte-runes";
	import { useNanoStore } from "../../_models/nano";
	import { recordStart, dragRaceMax } from "@/_global/lib/dragRace";

	const { startStore } = useNanoStore('nanoStart');
	const start = useStore(startStore);
	const { numberStore01 } = useNanoStore('nanoNumber01');
	const store = useStore(numberStore01);
	const { numberStore02 } = useNanoStore('nanoNumber02');

	$effect(() => {
		if (start.current !== 'number') return;

		recordStart('SvelteNanoNumber');
		numberStore01.set(1);
	});

	$effect(() => {
		if (!store.current) return;

		numberStore01.set(store.current + 1);
		if (store.current === dragRaceMax) {
			numberStore01.set(0);
			numberStore02.set(1);
		}
	});
</script>
