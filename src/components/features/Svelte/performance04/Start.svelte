<script lang="ts">
	import { recordStart } from "@/_global/lib/performance04";
	import { useStore } from "@/_global/piquo";

	const { svelteSetRaceId } = useStore('svelteRaceId');

	const handleClick = () => {
		recordStart('Race');
		svelteSetRaceId('Effect');
	};
</script>
<fieldset>
	<button onclick={ handleClick }>レーススタート！</button>
</fieldset>
