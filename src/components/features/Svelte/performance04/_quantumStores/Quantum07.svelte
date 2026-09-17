<script lang="ts">
	import { logStore } from "@/_global/lib/performance04";
	import { useStore } from "@/_global/piquo";

	const { svelteQuantum07, svelteSetQuantum08 } = useStore('svelteQuantum');

	const relayData = $derived.by(() => {
		if (!svelteQuantum07()) return 0;

		logStore();

		return svelteQuantum07();
	});

	$effect(() => {
		if (!relayData) return;

		svelteSetQuantum08(relayData);
	});
</script>
