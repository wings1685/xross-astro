<script lang="ts">
	import { useStore } from "@/_global/piquo";

	const { svelteQuantum04, svelteSetQuantum05 } = useStore('svelteQuantum');

	$effect(() => {
		if (!svelteQuantum04()) return;

		svelteSetQuantum05(svelteQuantum04());
	});
</script>
