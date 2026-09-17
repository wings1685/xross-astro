<script lang="ts">
	import { useStore } from "@/_global/piquo";

	const { svelteQuantum09, svelteSetQuantum10 } = useStore('svelteQuantum');

	$effect(() => {
		if (!svelteQuantum09()) return;

		svelteSetQuantum10(svelteQuantum09());
	});
</script>
