<script lang="ts">
	import { useQuantumDataContexts } from "../_models/QuantumContext.svelte";

	const { quantumData01, setQuantumData02 } = useQuantumDataContexts();

	$effect(() => {
		if (!quantumData01()) return;

		setQuantumData02(quantumData01());
	});
</script>
