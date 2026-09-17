<script lang="ts">
	import { logStore } from "@/_global/lib/performance04";
	import { useStore } from "@/_global/piquo";

	const { svelteQuantum02, svelteSetQuantum03 } = useStore('svelteQuantum');

	const relayData = $derived.by(() => {
		if (!svelteQuantum02()) return 0;

		logStore();

		return svelteQuantum02();
	});

	$effect(() => {
		if (!relayData) return;

		svelteSetQuantum03(relayData);
	});
</script>
