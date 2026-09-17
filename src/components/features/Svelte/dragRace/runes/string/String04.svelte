<script lang="ts">
	import { useStore } from "@/_global/piquo";
	import { dragRaceMax } from "@/_global/lib/dragRace";

	const { stringStore04, setString04 } = useStore('svelteString04');
	const { setString05 } = useStore('svelteString05');

	$effect(() => {
		const value = +stringStore04();
		if (!value) return;

		setString04((value + 1).toString());
		if (value === dragRaceMax) {
			setString04('');
			setString05('1');
		}
	});
</script>
