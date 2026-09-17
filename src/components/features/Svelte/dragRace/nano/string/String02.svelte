<script lang="ts">
	import { useStore } from "@nanostores/svelte-runes";
	import { useNanoStore } from "../../_models/nano";
	import { dragRaceMax } from "@/_global/lib/dragRace";

	const { stringStore02 } = useNanoStore('nanoString02');
	const store = useStore(stringStore02);
	const { stringStore03 } = useNanoStore('nanoString03');

	$effect(() => {
		const value = +store.current;
		if (!value) return;

		stringStore02.set((value + 1).toString());
		if (value === dragRaceMax) {
			stringStore02.set('');
			stringStore03.set('1');
		}
	});
</script>
