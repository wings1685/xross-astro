<script lang="ts">
	import { recordFinished, logStore } from "@/_global/lib/performance04";
	import { useStore } from "@/_global/piquo";

	const { svelteQuantum10 } = useStore('svelteQuantum');
	const { svelteSetRaceId } = useStore('svelteRaceId');

	const relayData = $derived.by(() => {
		if (!svelteQuantum10()) return 0;

		logStore();

		return svelteQuantum10();
	});

	$effect(() => {
		if (!relayData) return;

		recordFinished('Store');
		recordFinished('Race');
		svelteSetRaceId(null);
	});
</script>
