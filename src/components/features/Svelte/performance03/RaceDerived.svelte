<script lang="ts">
	import { recordStart, recordFinished } from "@/_global/lib/performance03";
	import { useStore } from "@/_global/piquo";

	const { svelteRaceNo } = useStore('svelteRaceNo');

	const state01 = $derived.by(() => {
		if (!svelteRaceNo()) return;

		recordStart('RaceDerivedState');
		return svelteRaceNo() + 1;
	});
	const state02 = $derived.by(() => {
		if (!state01) return;

		return state01;
	});
	const state03 = $derived.by(() => {
		if (!state02) return;

		return state02;
	});
	const state04 = $derived.by(() => {
		if (!state03) return;

		return state03;
	});
	const state05 = $derived.by(() => {
		if (!state04) return;

		return state04;
	});
	const state06 = $derived.by(() => {
		if (!state05) return;

		return state05;
	});
	const state07 = $derived.by(() => {
		if (!state06) return;

		return state06;
	});
	const state08 = $derived.by(() => {
		if (!state07) return;

		return state07;
	});
	const state09 = $derived.by(() => {
		if (!state08) return;

		return state08;
	});
	const state10 = $derived.by(() => {
		if (!state09) return;

		return state09;
	});
	const finished = $derived.by(() => {
		recordFinished('RaceDerivedState');

		return state10;
	});
	$effect.pre(() => { const _ = finished });
</script>
