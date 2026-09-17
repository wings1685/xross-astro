<script lang="ts">
	import { loopTotal, recordFinished } from "@/_global/lib/performance03";
	import { useStore } from "@/_global/piquo";

	const { svelteSetQuantumStoreStart, svelteSetQuantum01, svelteQuantum10 } = useStore('svelteQuantum');

	const incrementStore = (value: number) => {
		svelteSetQuantum01(value + 1);
	};

	$effect(() => {
		if (!svelteQuantum10()) return;

		if (svelteQuantum10() >= loopTotal) {
			recordFinished('QuantumStore');

			svelteSetQuantumStoreStart(0);
			return;
		}

		incrementStore(svelteQuantum10());
	});
</script>
