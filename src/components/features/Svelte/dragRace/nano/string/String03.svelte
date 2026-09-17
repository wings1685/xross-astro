<script lang="ts">
	import { useStore } from "@nanostores/svelte-runes";
	import { useNanoStore } from "../../_models/nano";
	import { dragRaceMax } from "@/_global/lib/dragRace";

	const { stringStore03 } = useNanoStore('nanoString03');
	const store = useStore(stringStore03);
	const { stringStore04 } = useNanoStore('nanoString04');

	$effect(() => {
		const value = +store.current;
		if (!value) return;

		stringStore03.set((value + 1).toString());
		if (value === dragRaceMax) {
			stringStore03.set('');
			stringStore04.set('1');
		}
	});
</script>
