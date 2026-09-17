<script lang="ts">
	import { useStore } from "@/_global/piquo";
	import { recordStart, recordFinished } from "@/_global/lib/performance04";
	import { useRelayDataContexts } from "../_models/RelayContext.svelte";
	import { Child01 } from "./";

	const { relayData, setRelayData } = useRelayDataContexts();
	const { svelteRaceId, svelteSetRaceId } = useStore('svelteRaceId');
	let relayStart = $state(0);

	$effect(() => {
		if (svelteRaceId() !== 'Props' || relayData()) return;

		recordStart('Props');
		relayStart = 1;
	});

	$effect(() => {
		if (svelteRaceId() !== 'Context' || !relayData()) return;

		recordFinished('Context');
		setRelayData(0);
		relayStart = 0;

		svelteSetRaceId('Memo');
	});
</script>
<Child01 relay={ relayStart } />
