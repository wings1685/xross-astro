<script lang="ts">
	import { useStore } from "@/_global/piquo";

	const { svelteSetQuantumStoreStart, svelteSetQuantumContextStart } = useStore('svelteQuantum');

	const handleClick = () => {
		svelteSetQuantumContextStart(1);
		svelteSetQuantumStoreStart(1);
	};
</script>
<fieldset>
	<button onclick={ handleClick }>50 連鎖スタート</button>
</fieldset>
