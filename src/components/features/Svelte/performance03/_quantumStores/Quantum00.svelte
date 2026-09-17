<script lang="ts">
	import { useStore } from "@/_global/piquo";
	import { recordStart } from "@/_global/lib/performance03";

	const { svelteQuantumStoreStart, svelteSetQuantum01 } = useStore('svelteQuantum');

	$effect(() => {
		if (!svelteQuantumStoreStart()) return;

		recordStart('QuantumStore');
		svelteSetQuantum01(svelteQuantumStoreStart());
	});
</script>
