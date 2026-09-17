<script lang="ts">
	import { useStore } from "@/_global/piquo";

	const { svelteQuantum05, svelteSetQuantum06 } = useStore('svelteQuantum');

	$effect(() => {
		if (!svelteQuantum05()) return;

		svelteSetQuantum06(svelteQuantum05());
	});
</script>
