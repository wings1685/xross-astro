<script lang="ts">
	import { useStore } from "@/_global/piquo";
	import { dragRaceMax } from "@/_global/lib/dragRace";

	const { numberStore09, setNumber09 } = useStore('svelteNumber09');
	const { setNumber10 } = useStore('svelteNumber10');

	$effect(() => {
		if (!numberStore09()) return;

		setNumber09(numberStore09() + 1);
		if (numberStore09() === dragRaceMax) {
			setNumber09(0);
			setNumber10(1);
		}
	});
</script>
