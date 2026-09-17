<script lang="ts">
	import { useStore } from "@/_global/piquo";
	import { dragRaceMax } from "@/_global/lib/dragRace";

	const { numberStore08, setNumber08 } = useStore('svelteNumber08');
	const { setNumber09 } = useStore('svelteNumber09');

	$effect(() => {
		if (!numberStore08()) return;

		setNumber08(numberStore08() + 1);
		if (numberStore08() === dragRaceMax) {
			setNumber08(0);
			setNumber09(1);
		}
	});
</script>
