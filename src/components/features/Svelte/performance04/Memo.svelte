<script lang="ts">
	import { recordStart, recordFinished, logMemo } from "@/_global/lib/performance04";
	import { useStore } from "@/_global/piquo";

	const { svelteRaceId, svelteSetRaceId } = useStore('svelteRaceId');

	let num = 0;

	const state01 = $derived.by(() => {
		if (svelteRaceId() !== 'Memo') return 0;
		recordStart('Memo');
		return num + 1;
	});
	const state02 = $derived.by(() => {
		if (!state01) return;

		logMemo();
		return state01;
	});
	const state03 = $derived.by(() => {
		if (!state02) return;

		logMemo();
		return state02;
	});
	const state04 = $derived.by(() => {
		if (!state03) return;

		logMemo();
		return state03;
	});
	const state05 = $derived.by(() => {
		if (!state04) return;

		logMemo();
		return state04;
	});
	const state06 = $derived.by(() => {
		if (!state05) return;

		logMemo();
		return state05;
	});
	const state07 = $derived.by(() => {
		if (!state06) return;

		logMemo();
		return state06;
	});
	const state08 = $derived.by(() => {
		if (!state07) return;

		logMemo();
		return state07;
	});
	const state09 = $derived.by(() => {
		if (!state08) return;

		logMemo();
		return state08;
	});
	const state10 = $derived.by(() => {
		if (!state09) return;

		logMemo();
		return state09;
	});
	const finished = $derived.by(() => {
		if (!state10) return;

		logMemo();
		recordFinished('Memo');
		return state10;
	});
	$effect(() => {
		if (!finished) return;

		num = finished;
		svelteSetRaceId('Store');
	});
</script>
