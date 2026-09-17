<script lang="ts">
	import { useStore } from "@/_global/piquo";
	import { dragRaceMax } from "@/_global/lib/dragRace";

	const { numberStore07, setNumber07 } = useStore('svelteNumber07');
	const { setNumber08 } = useStore('svelteNumber08');

	$effect(() => {
		if (!numberStore07()) return;

		setNumber07(numberStore07() + 1);
		if (numberStore07() === dragRaceMax) {
			setNumber07(0);
			setNumber08(1);
		}
	});
</script>
