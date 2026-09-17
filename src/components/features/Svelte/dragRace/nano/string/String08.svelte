<script lang="ts">
	import { useStore } from "@nanostores/svelte-runes";
	import { useNanoStore } from "../../_models/nano";
	import { dragRaceMax } from "@/_global/lib/dragRace";

	const { stringStore08 } = useNanoStore('nanoString08');
	const store = useStore(stringStore08);
	const { stringStore09 } = useNanoStore('nanoString09');

	$effect(() => {
		const value = +store.current;
		if (!value) return;

		stringStore08.set((value + 1).toString());
		if (value === dragRaceMax) {
			stringStore08.set('');
			stringStore09.set('1');
		}
	});
</script>
