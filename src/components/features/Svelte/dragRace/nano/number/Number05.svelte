<script lang="ts">
	import { useStore } from "@nanostores/svelte-runes";
	import { useNanoStore } from "../../_models/nano";
	import { dragRaceMax } from "@/_global/lib/dragRace";

	const { numberStore05 } = useNanoStore('nanoNumber05');
	const store = useStore(numberStore05);
	const { numberStore06 } = useNanoStore('nanoNumber06');

	$effect(() => {
		if (!store.current) return;

		numberStore05.set(store.current + 1);
		if (store.current === dragRaceMax) {
			numberStore05.set(0);
			numberStore06.set(1);
		}
	});
</script>
