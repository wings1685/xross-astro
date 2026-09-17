<script lang="ts">
	import { useStore } from "@nanostores/svelte-runes";
	import { useNanoStore } from "../../_models/nano";
	import { dragRaceMax } from "@/_global/lib/dragRace";

	const { numberStore08 } = useNanoStore('nanoNumber08');
	const store = useStore(numberStore08);
	const { numberStore09 } = useNanoStore('nanoNumber09');

	$effect(() => {
		if (!store.current) return;

		numberStore08.set(store.current + 1);
		if (store.current === dragRaceMax) {
			numberStore08.set(0);
			numberStore09.set(1);
		}
	});
</script>
