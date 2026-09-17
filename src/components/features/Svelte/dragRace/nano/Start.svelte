<script lang="ts">
	import { useNanoStore } from "../_models/nano";

	const { startStore } = useNanoStore('nanoStart');

	const raceStart = () => {
		startStore.set('number');
	};
</script>
<fieldset>
	<button onclick={ raceStart }>Start Svelte Nano Stores!!!</button>
</fieldset>
