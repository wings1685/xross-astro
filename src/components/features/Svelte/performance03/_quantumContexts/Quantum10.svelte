<script lang="ts">
	import { useQuantumDataContexts } from "../_models/QuantumContext.svelte";
	import { loopTotal, recordFinished } from "@/_global/lib/performance03";
	import { useStore } from "@/_global/piquo";

	const { svelteSetQuantumContextStart } = useStore('svelteQuantum');
	const { setQuantumData01, quantumData10 } = useQuantumDataContexts();

	const incrementContext = (value: number) => {
		setQuantumData01(value + 1);
	};

	$effect(() => {
		if (!quantumData10()) return;

		if (quantumData10() >= loopTotal) {
			recordFinished('QuantumContext');

			svelteSetQuantumContextStart(0);
			return;
		}

		incrementContext(quantumData10());
	});
</script>
