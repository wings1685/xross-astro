<script lang="ts">
	import { useStore } from "@/_global/piquo";
	import { dragRaceMax } from "@/_global/lib/dragRace";

	const { stringStore03, setString03 } = useStore('svelteString03');
	const { setString04 } = useStore('svelteString04');

	$effect(() => {
		const value = +stringStore03();
		if (!value) return;

		setString03((value + 1).toString());
		if (value === dragRaceMax) {
			setString03('');
			setString04('1');
		}
	});
</script>
