<script lang="ts">
	import { useStore } from "@/_global/piquo";

	const { svelteQuantum07, svelteSetQuantum08 } = useStore('svelteQuantum');

	$effect(() => {
		if (!svelteQuantum07()) return;

		svelteSetQuantum08(svelteQuantum07());
	});
</script>
