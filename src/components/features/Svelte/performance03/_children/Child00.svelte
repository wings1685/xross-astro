<script lang="ts">
	import { recordFinished } from "@/_global/lib/performance03";
	import { useRelayDataContexts } from "../_models/RelayContext.svelte";
	import { useStore } from "@/_global/piquo";
	import { Child01 } from "./";
	import type { RelayData, RelaySetter } from "../_models/types";

	const { relayData } = useRelayDataContexts();
	const { svelteRelay } = useStore('svelteRelay');
	let val = $state(0);
	let relay = $state(0);
	const setRelay: RelaySetter = (value: RelayData) => { relay = value; };

	$effect(() => {
		if (!relay) return;

		recordFinished('RelaySetter');
	});

	$effect(() => {
		if (!relayData()) return;

		recordFinished('RelayContext');
	});

	$effect(() => {
		if (!svelteRelay()) return;

		recordFinished('RelayStore');
	});

	$effect(() => {
		if (!val) return;

		recordFinished('RelayBindable');
	});
</script>
<Child01 bind:relay={ val } setRelay={ setRelay } />
