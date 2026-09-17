<script lang="ts">
	import { useStore } from "@nanostores/svelte-runes";
	import { useNanoStore } from "../../_models/nano";
	import { dragRaceMax } from "@/_global/lib/dragRace";

	const { numberStore03 } = useNanoStore('nanoNumber03');
	const store = useStore(numberStore03);
	const { numberStore04 } = useNanoStore('nanoNumber04');

	$effect(() => {
		if (!store.current) return;

		numberStore03.set(store.current + 1);
		if (store.current === dragRaceMax) {
			numberStore03.set(0);
			numberStore04.set(1);
		}
	});
</script>
