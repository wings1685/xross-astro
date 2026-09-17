<script lang="ts">
	import { useQuantumDataContexts } from "../_models/QuantumContext.svelte";

	const { quantumData09, setQuantumData10 } = useQuantumDataContexts();

	$effect(() => {
		if (!quantumData09()) return;

		setQuantumData10(quantumData09());
	});
</script>
