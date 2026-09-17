<script lang="ts">
	import { useStore } from "@/_global/piquo";

	const { svelteRaceNo, svelteSetRaceNo } = useStore('svelteRaceNo');

	const handleClick = () => {
		svelteSetRaceNo(svelteRaceNo() + 1);
	};
</script>
<fieldset>
	<button onclick={ handleClick }>10 連鎖スタート</button>
</fieldset>
