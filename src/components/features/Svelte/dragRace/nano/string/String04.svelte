<script lang="ts">
	import { useStore } from "@nanostores/svelte-runes";
	import { useNanoStore } from "../../_models/nano";
	import { dragRaceMax } from "@/_global/lib/dragRace";

	const { stringStore04 } = useNanoStore('nanoString04');
	const store = useStore(stringStore04);
	const { stringStore05 } = useNanoStore('nanoString05');

	$effect(() => {
		const value = +store.current;
		if (!value) return;

		stringStore04.set((value + 1).toString());
		if (value === dragRaceMax) {
			stringStore04.set('');
			stringStore05.set('1');
		}
	});
</script>
