<script lang="ts">
	import { useStore } from "@/_global/piquo";
	import { dragRaceMax } from "@/_global/lib/dragRace";

	const { stringStore02, setString02 } = useStore('svelteString02');
	const { setString03 } = useStore('svelteString03');

	$effect(() => {
		const value = +stringStore02();
		if (!value) return;

		setString02((value + 1).toString());
		if (value === dragRaceMax) {
			setString02('');
			setString03('1');
		}
	});
</script>
