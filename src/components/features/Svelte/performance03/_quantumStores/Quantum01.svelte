<script lang="ts">
	import { useStore } from "@/_global/piquo";

	const { svelteQuantum01, svelteSetQuantum02 } = useStore('svelteQuantum');

	$effect(() => {
		if (!svelteQuantum01()) return;

		svelteSetQuantum02(svelteQuantum01());
	});
</script>
