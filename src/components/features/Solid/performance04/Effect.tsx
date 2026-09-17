import { createSignal, createEffect } from "solid-js";
import { recordStart, recordFinished, logEffect } from "@/_global/lib/performance04";
import { useStore } from "@/_global/piquo";

export default function Effect() {
	const { solidRaceId, solidSetRaceId } = useStore('solidRaceId');
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

	let num = 0;

	createEffect(() => {
		if (solidRaceId() !== 'Effect') return;

		recordStart('Effect');
		setState01(num + 1);
	});
	createEffect(() => {
		if (!state01()) return;

		logEffect();
		setState02(state01());
	});
	createEffect(() => {
		if (!state02()) return;

		logEffect();
		setState03(state02());
	});
	createEffect(() => {
		if (!state03()) return;

		logEffect();
		setState04(state03());
	});
	createEffect(() => {
		if (!state04()) return;

		logEffect();
		setState05(state04());
	});
	createEffect(() => {
		if (!state05()) return;

		logEffect();
		setState06(state05());
	});
	createEffect(() => {
		if (!state06()) return;

		logEffect();
		setState07(state06());
	});
	createEffect(() => {
		if (!state07()) return;

		logEffect();
		setState08(state07());
	});
	createEffect(() => {
		if (!state08()) return;

		logEffect();
		setState09(state08());
	});
	createEffect(() => {
		if (!state09()) return;

		logEffect();
		setState10(state09());
	});
	createEffect(() => {
		if (!state10()) return;

		logEffect();
		recordFinished('Effect');
		num++;
		solidSetRaceId('Props');
	});

	return null;
}
