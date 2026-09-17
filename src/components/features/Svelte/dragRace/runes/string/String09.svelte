<script lang="ts">
	import { useStore } from "@/_global/piquo";
	import { dragRaceMax } from "@/_global/lib/dragRace";

	const { stringStore09, setString09 } = useStore('svelteString09');
	const { setString10 } = useStore('svelteString10');

	$effect(() => {
		const value = +stringStore09();
		if (!value) return;

		setString09((value + 1).toString());
		if (value === dragRaceMax) {
			setString09('');
			setString10('1');
		}
	});
</script>
