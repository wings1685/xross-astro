<script lang="ts">
	import { logProps } from "@/_global/lib/performance04";
	import { Child10 } from "./";
	import type { RelayProps } from "../_models/RelayContext.svelte";

	const { relay }: RelayProps = $props();

	const relayData = $derived.by(() => {
		if (!relay) return 0;

		logProps();

		return relay;
	});
</script>
<Child10 relay={ relayData } />
