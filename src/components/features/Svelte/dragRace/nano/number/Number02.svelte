<script lang="ts">
	import { useStore } from "@nanostores/svelte-runes";
	import { useNanoStore } from "../../_models/nano";
	import { dragRaceMax } from "@/_global/lib/dragRace";

	const { numberStore02 } = useNanoStore('nanoNumber02');
	const store = useStore(numberStore02);
	const { numberStore03 } = useNanoStore('nanoNumber03');

	$effect(() => {
		if (!store.current) return;

		numberStore02.set(store.current + 1);
		if (store.current === dragRaceMax) {
			numberStore02.set(0);
			numberStore03.set(1);
		}
	});
</script>
