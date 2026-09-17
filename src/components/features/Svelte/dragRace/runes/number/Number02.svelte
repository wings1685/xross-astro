<script lang="ts">
	import { useStore } from "@/_global/piquo";
	import { dragRaceMax } from "@/_global/lib/dragRace";

	const { numberStore02, setNumber02 } = useStore('svelteNumber02');
	const { setNumber03 } = useStore('svelteNumber03');

	$effect(() => {
		if (!numberStore02()) return;

		setNumber02(numberStore02() + 1);
		if (numberStore02() === dragRaceMax) {
			setNumber02(0);
			setNumber03(1);
		}
	});
</script>
