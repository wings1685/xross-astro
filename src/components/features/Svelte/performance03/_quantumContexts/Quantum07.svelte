<script lang="ts">
	import { useQuantumDataContexts } from "../_models/QuantumContext.svelte";

	const { quantumData07, setQuantumData08 } = useQuantumDataContexts();

	$effect(() => {
		if (!quantumData07()) return;

		setQuantumData08(quantumData07());
	});
</script>
