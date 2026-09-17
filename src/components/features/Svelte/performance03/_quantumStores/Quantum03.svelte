<script lang="ts">
	import { useStore } from "@/_global/piquo";

	const { svelteQuantum03, svelteSetQuantum04 } = useStore('svelteQuantum');

	$effect(() => {
		if (!svelteQuantum03()) return;

		svelteSetQuantum04(svelteQuantum03());
	});
</script>
