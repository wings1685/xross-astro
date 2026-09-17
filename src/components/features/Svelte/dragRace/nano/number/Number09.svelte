<script lang="ts">
	import { useStore } from "@nanostores/svelte-runes";
	import { useNanoStore } from "../../_models/nano";
	import { dragRaceMax } from "@/_global/lib/dragRace";

	const { numberStore09 } = useNanoStore('nanoNumber09');
	const store = useStore(numberStore09);
	const { numberStore10 } = useNanoStore('nanoNumber10');

	$effect(() => {
		if (!store.current) return;

		numberStore09.set(store.current + 1);
		if (store.current === dragRaceMax) {
			numberStore09.set(0);
			numberStore10.set(1);
		}
	});
</script>
