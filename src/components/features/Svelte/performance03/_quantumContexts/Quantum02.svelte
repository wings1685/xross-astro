<script lang="ts">
	import { useQuantumDataContexts } from "../_models/QuantumContext.svelte";

	const { quantumData02, setQuantumData03 } = useQuantumDataContexts();

	$effect(() => {
		if (!quantumData02()) return;

		setQuantumData03(quantumData02());
	});
</script>
