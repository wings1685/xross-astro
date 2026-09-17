<script lang="ts">
	import { useStore } from "@/_global/piquo";
	import { dragRaceMax } from "@/_global/lib/dragRace";

	const { numberStore05, setNumber05 } = useStore('svelteNumber05');
	const { setNumber06 } = useStore('svelteNumber06');

	$effect(() => {
		if (!numberStore05()) return;

		setNumber05(numberStore05() + 1);
		if (numberStore05() === dragRaceMax) {
			setNumber05(0);
			setNumber06(1);
		}
	});
</script>
