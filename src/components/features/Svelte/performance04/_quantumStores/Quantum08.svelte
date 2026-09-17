<script lang="ts">
	import { logStore } from "@/_global/lib/performance04";
	import { useStore } from "@/_global/piquo";

	const { svelteQuantum08, svelteSetQuantum09 } = useStore('svelteQuantum');

	const relayData = $derived.by(() => {
		if (!svelteQuantum08()) return 0;

		logStore();

		return svelteQuantum08();
	});

	$effect(() => {
		if (!relayData) return;

		svelteSetQuantum09(relayData);
	});
</script>
