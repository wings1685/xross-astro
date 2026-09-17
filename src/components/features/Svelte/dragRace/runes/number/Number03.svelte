<script lang="ts">
	import { useStore } from "@/_global/piquo";
	import { dragRaceMax } from "@/_global/lib/dragRace";

	const { numberStore03, setNumber03 } = useStore('svelteNumber03');
	const { setNumber04 } = useStore('svelteNumber04');

	$effect(() => {
		if (!numberStore03()) return;

		setNumber03(numberStore03() + 1);
		if (numberStore03() === dragRaceMax) {
			setNumber03(0);
			setNumber04(1);
		}
	});
</script>
