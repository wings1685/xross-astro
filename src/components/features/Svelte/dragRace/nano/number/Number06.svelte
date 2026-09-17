<script lang="ts">
	import { useStore } from "@nanostores/svelte-runes";
	import { useNanoStore } from "../../_models/nano";
	import { dragRaceMax } from "@/_global/lib/dragRace";

	const { numberStore06 } = useNanoStore('nanoNumber06');
	const store = useStore(numberStore06);
	const { numberStore07 } = useNanoStore('nanoNumber07');

	$effect(() => {
		if (!store.current) return;

		numberStore06.set(store.current + 1);
		if (store.current === dragRaceMax) {
			numberStore06.set(0);
			numberStore07.set(1);
		}
	});
</script>
