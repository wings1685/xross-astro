<script lang="ts">
	import { useStore } from "@/_global/piquo";
	import { recordFinished } from "@/_global/lib/performance02";
	import { useRelayDataContexts } from "../_models/RelayContext.svelte";
	import type { RelayProps } from "../_models/RelayContext.svelte";

	const { relay }: RelayProps = $props();

	const { relayData } = useRelayDataContexts();
	const { svelteRelay } = useStore('svelteRelay');

	$effect(() => {
		if (!relay) return;

		recordFinished('RelayProps');
	});

	$effect(() => {
		if (!relayData()) return;

		recordFinished('RelayContext');
	});

	$effect(() => {
		if (!svelteRelay()) return;

		recordFinished('RelayStore');
	});
</script>
<!-- <p>{ relay }</p>
<p>{ relay }</p>
<p>{ relay }</p>
<p>{ relay }</p>
<p>{ relay }</p>
<p>{ relay }</p>
<p>{ relay }</p>
<p>{ relay }</p>
<p>{ relay }</p>
<p>{ relay }</p> -->
