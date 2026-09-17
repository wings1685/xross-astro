<script lang="ts">
	import { logStore } from "@/_global/lib/performance04";
	import { useStore } from "@/_global/piquo";

	const { svelteQuantum03, svelteSetQuantum04 } = useStore('svelteQuantum');

	const relayData = $derived.by(() => {
		if (!svelteQuantum03()) return 0;

		logStore();

		return svelteQuantum03();
	});

	$effect(() => {
		if (!relayData) return;

		svelteSetQuantum04(relayData);
	});
</script>
