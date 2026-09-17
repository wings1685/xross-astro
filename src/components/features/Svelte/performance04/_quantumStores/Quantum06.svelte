<script lang="ts">
	import { logStore } from "@/_global/lib/performance04";
	import { useStore } from "@/_global/piquo";

	const { svelteQuantum06, svelteSetQuantum07 } = useStore('svelteQuantum');

	const relayData = $derived.by(() => {
		if (!svelteQuantum06()) return 0;

		logStore();

		return svelteQuantum06();
	});

	$effect(() => {
		if (!relayData) return;

		svelteSetQuantum07(relayData);
	});
</script>
