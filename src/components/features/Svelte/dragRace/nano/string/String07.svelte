<script lang="ts">
	import { useStore } from "@nanostores/svelte-runes";
	import { useNanoStore } from "../../_models/nano";
	import { dragRaceMax } from "@/_global/lib/dragRace";

	const { stringStore07 } = useNanoStore('nanoString07');
	const store = useStore(stringStore07);
	const { stringStore08 } = useNanoStore('nanoString08');

	$effect(() => {
		const value = +store.current;
		if (!value) return;

		stringStore07.set((value + 1).toString());
		if (value === dragRaceMax) {
			stringStore07.set('');
			stringStore08.set('1');
		}
	});
</script>
