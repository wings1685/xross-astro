<script lang="ts">
	import { logStore } from "@/_global/lib/performance04";
	import { useStore } from "@/_global/piquo";

	const { svelteQuantum09, svelteSetQuantum10 } = useStore('svelteQuantum');

	const relayData = $derived.by(() => {
		if (!svelteQuantum09()) return 0;

		logStore();

		return svelteQuantum09();
	});

	$effect(() => {
		if (!relayData) return;

		svelteSetQuantum10(relayData);
	});
</script>
