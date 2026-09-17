<script lang="ts">
	import { useStore } from "@/_global/piquo";
	import { dragRaceMax } from "@/_global/lib/dragRace";

	const { numberStore04, setNumber04 } = useStore('svelteNumber04');
	const { setNumber05 } = useStore('svelteNumber05');

	$effect(() => {
		if (!numberStore04()) return;

		setNumber04(numberStore04() + 1);
		if (numberStore04() === dragRaceMax) {
			setNumber04(0);
			setNumber05(1);
		}
	});
</script>
