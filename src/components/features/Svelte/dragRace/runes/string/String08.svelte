<script lang="ts">
	import { useStore } from "@/_global/piquo";
	import { dragRaceMax } from "@/_global/lib/dragRace";

	const { stringStore08, setString08 } = useStore('svelteString08');
	const { setString09 } = useStore('svelteString09');

	$effect(() => {
		const value = +stringStore08();
		if (!value) return;

		setString08((value + 1).toString());
		if (value === dragRaceMax) {
			setString08('');
			setString09('1');
		}
	});
</script>
