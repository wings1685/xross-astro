<script lang="ts">
	import { useStore } from "@/_global/piquo";

	const { svelteQuantum06, svelteSetQuantum07 } = useStore('svelteQuantum');

	$effect(() => {
		if (!svelteQuantum06()) return;

		svelteSetQuantum07(svelteQuantum06());
	});
</script>
