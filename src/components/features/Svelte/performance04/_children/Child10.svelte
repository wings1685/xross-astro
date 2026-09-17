<script lang="ts">
	import { useStore } from "@/_global/piquo";
	import { recordStart, recordFinished, logProps } from "@/_global/lib/performance04";
	import { useRelayDataContexts } from "../_models/RelayContext.svelte";
	import type { RelayProps } from "../_models/RelayContext.svelte";

	const { relay }: RelayProps = $props();

	const relayData = $derived.by(() => {
		if (!relay) return 0;

		logProps();

		return relay;
	});

	const { svelteRaceId, svelteSetRaceId } = useStore('svelteRaceId');
	const { setRelayDataWithLog } = useRelayDataContexts();

	$effect(() => {
		if (svelteRaceId() !== 'Props' || !relayData) return;

		recordFinished('Props');

		svelteSetRaceId('Context');
		recordStart('Context');
		setRelayDataWithLog(1);
	});
</script>
