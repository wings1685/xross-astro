<script lang="ts">
	import { useStore } from "@/_global/piquo";

	const { setStart } = useStore('svelteStart');

	const raceStart = () => {
		setStart('number');
	};
</script>
<fieldset>
	<button onclick={ raceStart }>Start Svelte Runes!!!</button>
</fieldset>
