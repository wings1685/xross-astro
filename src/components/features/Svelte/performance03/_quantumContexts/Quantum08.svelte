<script lang="ts">
	import { useQuantumDataContexts } from "../_models/QuantumContext.svelte";

	const { quantumData08, setQuantumData09 } = useQuantumDataContexts();

	$effect(() => {
		if (!quantumData08()) return;

		setQuantumData09(quantumData08());
	});
</script>
