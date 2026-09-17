<script lang="ts">
	import { useStore } from "@nanostores/svelte-runes";
	import { useNanoStore } from "../../_models/nano";
	import { dragRaceMax } from "@/_global/lib/dragRace";

	const { stringStore06 } = useNanoStore('nanoString06');
	const store = useStore(stringStore06);
	const { stringStore07 } = useNanoStore('nanoString07');

	$effect(() => {
		const value = +store.current;
		if (!value) return;

		stringStore06.set((value + 1).toString());
		if (value === dragRaceMax) {
			stringStore06.set('');
			stringStore07.set('1');
		}
	});
</script>
