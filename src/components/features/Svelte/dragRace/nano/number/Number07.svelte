<script lang="ts">
	import { useStore } from "@nanostores/svelte-runes";
	import { useNanoStore } from "../../_models/nano";
	import { dragRaceMax } from "@/_global/lib/dragRace";

	const { numberStore07 } = useNanoStore('nanoNumber07');
	const store = useStore(numberStore07);
	const { numberStore08 } = useNanoStore('nanoNumber08');

	$effect(() => {
		if (!store.current) return;

		numberStore07.set(store.current + 1);
		if (store.current === dragRaceMax) {
			numberStore07.set(0);
			numberStore08.set(1);
		}
	});
</script>
