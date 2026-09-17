<script lang="ts">
	import { useStore } from "@/_global/piquo";
	import { dragRaceMax } from "@/_global/lib/dragRace";

	const { numberStore06, setNumber06 } = useStore('svelteNumber06');
	const { setNumber07 } = useStore('svelteNumber07');

	$effect(() => {
		if (!numberStore06()) return;

		setNumber06(numberStore06() + 1);
		if (numberStore06() === dragRaceMax) {
			setNumber06(0);
			setNumber07(1);
		}
	});
</script>
