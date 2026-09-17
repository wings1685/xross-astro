<script lang="ts">
	import { useStore } from "@/_global/piquo";

	const { svelteQuantum08, svelteSetQuantum09 } = useStore('svelteQuantum');

	$effect(() => {
		if (!svelteQuantum08()) return;

		svelteSetQuantum09(svelteQuantum08());
	});
</script>
