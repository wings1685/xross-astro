<script lang="ts">
	import { recordStart } from "@/_global/lib/performance02";
	import { useRelayDataContexts } from "../_models/RelayContext.svelte";
	import { useStore } from "@/_global/piquo";
	import { Child01 } from "./";

	const { setRelayData } = useRelayDataContexts();
	const { svelteSetRelay } = useStore('svelteRelay');
	let relayStart = $state(0);

	const handleClick = () => {
		const start = relayStart + 1;
		recordStart('RelayProps');
		relayStart++;

		recordStart('RelayContext');
		setRelayData(start);

		recordStart('RelayStore');
		svelteSetRelay(start);
	};
</script>
<fieldset>
	<button onclick={ handleClick }>バケツリレー開始</button>
</fieldset>
<Child01 relay={ relayStart } />
