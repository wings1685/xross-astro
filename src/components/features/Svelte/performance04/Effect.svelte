<script lang="ts">
	import { recordStart, recordFinished, logEffect } from "@/_global/lib/performance04";
	import { useStore } from "@/_global/piquo";

	const { svelteRaceId, svelteSetRaceId } = useStore('svelteRaceId');

	let state01 = $state(0);
	let state02 = $state(0);
	let state03 = $state(0);
	let state04 = $state(0);
	let state05 = $state(0);
	let state06 = $state(0);
	let state07 = $state(0);
	let state08 = $state(0);
	let state09 = $state(0);
	let state10 = $state(0);

	let num = 0;

	$effect(() => {
		if (svelteRaceId() !== 'Effect') return;

		recordStart('Effect');
		state01 = num + 1;
	});
	$effect(() => {
		if (!state01) return;

		logEffect();
		state02 = state01;
	});
	$effect(() => {
		if (!state02) return;

		logEffect();
		state03 = state02;
	});
	$effect(() => {
		if (!state03) return;

		logEffect();
		state04 = state03;
	});
	$effect(() => {
		if (!state04) return;

		logEffect();
		state05 = state04;
	});
	$effect(() => {
		if (!state05) return;

		logEffect();
		state06 = state05;
	});
	$effect(() => {
		if (!state06) return;

		logEffect();
		state07 = state06;
	});
	$effect(() => {
		if (!state07) return;

		logEffect();
		state08 = state07;
	});
	$effect(() => {
		if (!state08) return;

		logEffect();
		state09 = state08;
	});
	$effect(() => {
		if (!state09) return;

		logEffect();
		state10 = state09;
	});
	$effect(() => {
		if (!state10) return;

		logEffect();
		recordFinished('Effect');
		num++;
		svelteSetRaceId('Props');
	});
</script>
