<script lang="ts">
	import { useStore } from "@/_global/piquo";
	import { dragRaceMax } from "@/_global/lib/dragRace";

	const { stringStore06, setString06 } = useStore('svelteString06');
	const { setString07 } = useStore('svelteString07');

	$effect(() => {
		const value = +stringStore06();
		if (!value) return;

		setString06((value + 1).toString());
		if (value === dragRaceMax) {
			setString06('');
			setString07('1');
		}
	});
</script>
