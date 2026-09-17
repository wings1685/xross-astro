<script lang="ts">
	import { useQuantumDataContexts } from "../_models/QuantumContext.svelte";

	const { quantumData04, setQuantumData05 } = useQuantumDataContexts();

	$effect(() => {
		if (!quantumData04()) return;

		setQuantumData05(quantumData04());
	});
</script>
