import { createMemo } from "solid-js";
import { recordStart, recordFinished } from "@/_global/lib/performance03";
import { useStore } from "@/_global/piquo";

export default function RaceMemo() {
	const { solidRaceNo } = useStore('solidRaceNo')

	const state01 = createMemo(() => {
		if (!solidRaceNo()) return 0;

		recordStart('RaceMemoState');
		return solidRaceNo() + 1;
	});
	const state02 = createMemo(() => {
		if (!state01()) return;

		return state01();
	});
	const state03 = createMemo(() => {
		if (!state02()) return;

		return state02();
	});
	const state04 = createMemo(() => {
		if (!state03()) return;

		return state03();
	});
	const state05 = createMemo(() => {
		if (!state04()) return;

		return state04();
	});
	const state06 = createMemo(() => {
		if (!state05()) return;

		return state05();
	});
	const state07 = createMemo(() => {
		if (!state06()) return;

		return state06();
	});
	const state08 = createMemo(() => {
		if (!state07()) return;

		return state07();
	});
	const state09 = createMemo(() => {
		if (!state08()) return;

		return state08();
	});
	const state10 = createMemo(() => {
		if (!state09()) return;

		return state09();
	});
	createMemo(() => {
		if (!state10()) return;

		recordFinished('RaceMemoState');
	});

	return null;
}
