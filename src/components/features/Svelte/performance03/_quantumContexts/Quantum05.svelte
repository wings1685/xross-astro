<script lang="ts">
	import { useQuantumDataContexts } from "../_models/QuantumContext.svelte";

	const { quantumData05, setQuantumData06 } = useQuantumDataContexts();

	$effect(() => {
		if (!quantumData05()) return;

		setQuantumData06(quantumData05());
	});
</script>
