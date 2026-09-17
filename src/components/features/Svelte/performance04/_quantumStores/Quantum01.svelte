<script lang="ts">
	import { logStore } from "@/_global/lib/performance04";
	import { useStore } from "@/_global/piquo";

	const { svelteQuantum01, svelteSetQuantum02 } = useStore('svelteQuantum');

	const relayData = $derived.by(() => {
		if (!svelteQuantum01()) return 0;

		logStore();

		return svelteQuantum01();
	});

	$effect(() => {
		if (!relayData) return;

		svelteSetQuantum02(relayData);
	});
</script>
