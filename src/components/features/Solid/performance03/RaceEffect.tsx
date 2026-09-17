import { createSignal, createEffect } from "solid-js";
import { recordStart, recordFinished } from "@/_global/lib/performance03";
import { useStore } from "@/_global/piquo";

export default function RaceEffect() {
	const { solidRaceNo } = useStore('solidRaceNo');
	const [ state01, setState01 ] = createSignal(0);
	const [ state02, setState02 ] = createSignal(0);
	const [ state03, setState03 ] = createSignal(0);
	const [ state04, setState04 ] = createSignal(0);
	const [ state05, setState05 ] = createSignal(0);
	const [ state06, setState06 ] = createSignal(0);
	const [ state07, setState07 ] = createSignal(0);
	const [ state08, setState08 ] = createSignal(0);
	const [ state09, setState09 ] = createSignal(0);
	const [ state10, setState10 ] = createSignal(0);

	createEffect(() => {
		if (!solidRaceNo()) return;

		recordStart('RaceEffectState');
		setState01(solidRaceNo() + 1);
	});
	createEffect(() => {
		if (!state01()) return;

		setState02(state01());
	});
	createEffect(() => {
		if (!state02()) return;

		setState03(state02());
	});
	createEffect(() => {
		if (!state03()) return;

		setState04(state03());
	});
	createEffect(() => {
		if (!state04()) return;

		setState05(state04());
	});
	createEffect(() => {
		if (!state05()) return;

		setState06(state05());
	});
	createEffect(() => {
		if (!state06()) return;

		setState07(state06());
	});
	createEffect(() => {
		if (!state07()) return;

		setState08(state07());
	});
	createEffect(() => {
		if (!state08()) return;

		setState09(state08());
	});
	createEffect(() => {
		if (!state09()) return;

		setState10(state09());
	});
	createEffect(() => {
		if (!state10()) return;

		recordFinished('RaceEffectState');
	});

	return null;
}
