import { createEffect, createMemo } from "solid-js";
import { recordStart, recordFinished, logMemo } from "@/_global/lib/performance04";
import { useStore } from "@/_global/piquo";

export default function Memo() {
	const { solidRaceId, solidSetRaceId } = useStore('solidRaceId');

	let num = 0;

	const state01 = createMemo(() => {
		if (solidRaceId() !== 'Memo') return 0;

		recordStart('Memo');
		return num + 1;
	});
	const state02 = createMemo(() => {
		if (!state01()) return;

		logMemo();
		return state01();
	});
	const state03 = createMemo(() => {
		if (!state02()) return;

		logMemo();
		return state02();
	});
	const state04 = createMemo(() => {
		if (!state03()) return;

		logMemo();
		return state03();
	});
	const state05 = createMemo(() => {
		if (!state04()) return;

		logMemo();
		return state04();
	});
	const state06 = createMemo(() => {
		if (!state05()) return;

		logMemo();
		return state05();
	});
	const state07 = createMemo(() => {
		if (!state06()) return;

		logMemo();
		return state06();
	});
	const state08 = createMemo(() => {
		if (!state07()) return;

		logMemo();
		return state07();
	});
	const state09 = createMemo(() => {
		if (!state08()) return;

		logMemo();
		return state08();
	});
	const state10 = createMemo(() => {
		if (!state09()) return;

		logMemo();
		return state09();
	});
	const finished = createMemo(() => {
		if (!state10()) return;

		logMemo();
		recordFinished('Memo');
		return state10();
	});
	createEffect(() => {
		if (!finished()) return;

		num = finished() ?? 0;
		solidSetRaceId('Store');
	});

	return null;
}
