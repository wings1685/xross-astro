<script lang="ts">
	import { recordStart, recordFinished } from "@/_global/lib/performance03";
	import { useStore } from "@/_global/piquo";

	const { svelteRaceNo } = useStore('svelteRaceNo');
	let state01 = $state(0);
	const setState01 = (value: number) => { state01 = value; };
	let state02 = $state(0);
	const setState02 = (value: number) => { state02 = value; };
	let state03 = $state(0);
	const setState03 = (value: number) => { state03 = value; };
	let state04 = $state(0);
	const setState04 = (value: number) => { state04 = value; };
	let state05 = $state(0);
	const setState05 = (value: number) => { state05 = value; };
	let state06 = $state(0);
	const setState06 = (value: number) => { state06 = value; };
	let state07 = $state(0);
	const setState07 = (value: number) => { state07 = value; };
	let state08 = $state(0);
	const setState08 = (value: number) => { state08 = value; };
	let state09 = $state(0);
	const setState09 = (value: number) => { state09 = value; };
	let state10 = $state(0);
	const setState10 = (value: number) => { state10 = value; };

	$effect(() => {
		if (!svelteRaceNo()) return;

		recordStart('RaceEffectState');
		setState01(svelteRaceNo() + 1);
	});
	$effect(() => {
		if (!state01) return;

		setState02(state01);
	});
	$effect(() => {
		if (!state02) return;

		setState03(state02);
	});
	$effect(() => {
		if (!state03) return;

		setState04(state03);
	});
	$effect(() => {
		if (!state04) return;

		setState05(state04);
	});
	$effect(() => {
		if (!state05) return;

		setState06(state05);
	});
	$effect(() => {
		if (!state06) return;

		setState07(state06);
	});
	$effect(() => {
		if (!state07) return;

		setState08(state07);
	});
	$effect(() => {
		if (!state08) return;

		setState09(state08);
	});
	$effect(() => {
		if (!state09) return;

		setState10(state09);
	});
	$effect(() => {
		if (!state10) return;

		recordFinished('RaceEffectState');
	});
</script>
