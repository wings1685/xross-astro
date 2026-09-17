<script lang="ts">
	import { useQuantumDataContexts } from "../_models/QuantumContext.svelte";

	const { quantumData03, setQuantumData04 } = useQuantumDataContexts();

	$effect(() => {
		if (!quantumData03()) return;

		setQuantumData04(quantumData03());
	});
</script>
