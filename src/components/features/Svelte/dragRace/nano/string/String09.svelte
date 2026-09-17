<script lang="ts">
	import { useStore } from "@nanostores/svelte-runes";
	import { useNanoStore } from "../../_models/nano";
	import { dragRaceMax } from "@/_global/lib/dragRace";

	const { stringStore09 } = useNanoStore('nanoString09');
	const store = useStore(stringStore09);
	const { stringStore10 } = useNanoStore('nanoString10');

	$effect(() => {
		const value = +store.current;
		if (!value) return;

		stringStore09.set((value + 1).toString());
		if (value === dragRaceMax) {
			stringStore09.set('');
			stringStore10.set('1');
		}
	});
</script>
