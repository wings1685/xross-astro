<script lang="ts">
	import { useStore } from "@/_global/piquo";
	import { recordStart } from "@/_global/lib/performance04";

	const { svelteRaceId } = useStore('svelteRaceId');
	const { svelteSetQuantum01 } = useStore('svelteQuantum');

	let num = 0;

	$effect(() => {
		if (svelteRaceId() !== 'Store') return;

		recordStart('Store');
		svelteSetQuantum01(num + 1);
		num++;
	});
</script>
