<script lang="ts">
	import { useStore } from "@/_global/piquo";
	import { dragRaceMax } from "@/_global/lib/dragRace";

	const { stringStore05, setString05 } = useStore('svelteString05');
	const { setString06 } = useStore('svelteString06');

	$effect(() => {
		const value = +stringStore05();
		if (!value) return;

		setString05((value + 1).toString());
		if (value === dragRaceMax) {
			setString05('');
			setString06('1');
		}
	});
</script>
