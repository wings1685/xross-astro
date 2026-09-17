<script lang="ts">
	import { useQuantumDataContexts } from "../_models/QuantumContext.svelte";

	const { quantumData06, setQuantumData07 } = useQuantumDataContexts();

	$effect(() => {
		if (!quantumData06()) return;

		setQuantumData07(quantumData06());
	});
</script>
