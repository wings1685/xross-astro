<script lang="ts">
	import { logStore } from "@/_global/lib/performance04";
	import { useStore } from "@/_global/piquo";

	const { svelteQuantum05, svelteSetQuantum06 } = useStore('svelteQuantum');

	const relayData = $derived.by(() => {
		if (!svelteQuantum05()) return 0;

		logStore();

		return svelteQuantum05();
	});

	$effect(() => {
		if (!relayData) return;

		svelteSetQuantum06(relayData);
	});
</script>
