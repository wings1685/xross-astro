<script lang="ts">
	import { useStore } from "@/_global/piquo";

	const { svelteQuantum02, svelteSetQuantum03 } = useStore('svelteQuantum');

	$effect(() => {
		if (!svelteQuantum02()) return;

		svelteSetQuantum03(svelteQuantum02());
	});
</script>
