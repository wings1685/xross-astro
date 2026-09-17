<script lang="ts">
	import { useStore } from "@/_global/piquo";
	import { recordStart } from "@/_global/lib/performance03";
	import { useRelayDataContexts } from "../_models/RelayContext.svelte";
	import type { RelayProps } from "../_models/types";

	let { relay = $bindable(), setRelay }: RelayProps = $props();

	const { relayData, setRelayData } = useRelayDataContexts();
	const { svelteSetRelay } = useStore('svelteRelay');

	const handleChange = () => {
		const start = relayData() + 1;

		recordStart('RelaySetter');
		setRelay(start);

		recordStart('RelayContext');
		setRelayData(start);

		recordStart('RelayStore');
		svelteSetRelay(start);
	};

	$effect(() => {
		if (!relay) return;

		recordStart('RelayBindable');
	});
</script>
<fieldset>
	<input type="number" onchange={ handleChange } bind:value={ relay }>
</fieldset>
