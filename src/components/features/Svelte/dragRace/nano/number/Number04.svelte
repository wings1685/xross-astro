<script lang="ts">
	import { useStore } from "@nanostores/svelte-runes";
	import { useNanoStore } from "../../_models/nano";
	import { dragRaceMax } from "@/_global/lib/dragRace";

	const { numberStore04 } = useNanoStore('nanoNumber04');
	const store = useStore(numberStore04);
	const { numberStore05 } = useNanoStore('nanoNumber05');

	$effect(() => {
		if (!store.current) return;

		numberStore04.set(store.current + 1);
		if (store.current === dragRaceMax) {
			numberStore04.set(0);
			numberStore05.set(1);
		}
	});
</script>
