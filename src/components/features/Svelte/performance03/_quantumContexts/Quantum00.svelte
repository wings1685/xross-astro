<script lang="ts">
	import { useQuantumDataContexts } from "../_models/QuantumContext.svelte";
	import { useStore } from "@/_global/piquo";
	import { recordStart } from "@/_global/lib/performance03";

	const { svelteQuantumContextStart } = useStore('svelteQuantum');
	const { setQuantumData01 } = useQuantumDataContexts();

	$effect(() => {
		if (!svelteQuantumContextStart()) return;

		recordStart('QuantumContext');
		setQuantumData01(svelteQuantumContextStart());
	});
</script>
