<script lang="ts">
	import { logStore } from "@/_global/lib/performance04";
	import { useStore } from "@/_global/piquo";

	const { svelteQuantum04, svelteSetQuantum05 } = useStore('svelteQuantum');

	const relayData = $derived.by(() => {
		if (!svelteQuantum04()) return 0;

		logStore();

		return svelteQuantum04();
	});

	$effect(() => {
		if (!relayData) return;

		svelteSetQuantum05(relayData);
	});
</script>
