/** @jsxImportSource react */

import { useLayoutEffect, useMemo, useRef, useSyncExternalStore } from "react";
import { useStore } from "./_models/stores";
import { recordStart, recordFinished, logMemo } from "@/_global/lib/performance04";

export default function Memo() {
	const raceId = useStore('raceId');
	const raceIdStore = useSyncExternalStore(raceId.subscribe, raceId.getSnapshot, raceId.getServerSnapshot);

	const num = useRef(0);

	const state01 = useMemo(() => {
		if (raceIdStore !== 'Memo') return 0;

		recordStart('Memo');
		return num.current + 1;
	}, [ raceIdStore ]);
	const state02 = useMemo(() => {
		if (!state01) return;

		logMemo();
		return state01;
	}, [ state01 ]);
	const state03 = useMemo(() => {
		if (!state02) return;

		logMemo();
		return state02;
	}, [ state02 ]);
	const state04 = useMemo(() => {
		if (!state03) return;

		logMemo();
		return state03;
	}, [ state03 ]);
	const state05 = useMemo(() => {
		if (!state04) return;

		logMemo();
		return state04;
	}, [ state04 ]);
	const state06 = useMemo(() => {
		if (!state05) return;

		logMemo();
		return state05;
	}, [ state05 ]);
	const state07 = useMemo(() => {
		if (!state06) return;

		logMemo();
		return state06;
	}, [ state06 ]);
	const state08 = useMemo(() => {
		if (!state07) return;

		logMemo();
		return state07;
	}, [ state07 ]);
	const state09 = useMemo(() => {
		if (!state08) return;

		logMemo();
		return state08;
	}, [ state08 ]);
	const state10 = useMemo(() => {
		if (!state09) return;

		logMemo();
		return state09;
	}, [ state09 ]);
	const finished = useMemo(() => {
		if (!state10) return;

		logMemo();
		recordFinished('Memo');
		return state10;
	}, [ state10 ]);
	useLayoutEffect(() => {
		if (!finished) return;

		num.current = finished;
		raceId.setStore('Store');
	}, [ finished ]);

	return null;
}
