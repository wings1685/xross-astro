<script lang="ts">
	import { useStore } from "@nanostores/svelte-runes";
	import { useNanoStore } from "../../_models/nano";
	import { dragRaceMax } from "@/_global/lib/dragRace";

	const { stringStore05 } = useNanoStore('nanoString05');
	const store = useStore(stringStore05);
	const { stringStore06 } = useNanoStore('nanoString06');

	$effect(() => {
		const value = +store.current;
		if (!value) return;

		stringStore05.set((value + 1).toString());
		if (value === dragRaceMax) {
			stringStore05.set('');
			stringStore06.set('1');
		}
	});
</script>
