<script lang="ts">
	import { useStore } from "@/_global/piquo";
	import { dragRaceMax } from "@/_global/lib/dragRace";

	const { stringStore07, setString07 } = useStore('svelteString07');
	const { setString08 } = useStore('svelteString08');

	$effect(() => {
		const value = +stringStore07();
		if (!value) return;

		setString07((value + 1).toString());
		if (value === dragRaceMax) {
			setString07('');
			setString08('1');
		}
	});
</script>
