/** @jsxImportSource react */

import { useMemo, useSyncExternalStore } from "react";
import { useStore } from "./_models/stores";
import { recordStart, recordFinished } from "@/_global/lib/performance03";

export default function RaceMemo() {
	const store = useStore('raceNo');
	const raceNoStore = useSyncExternalStore(store.subscribe, store.getSnapshot, store.getServerSnapshot);

	const state01 = useMemo(() => {
		if (!raceNoStore) return;

		recordStart('RaceMemoState');
		return raceNoStore + 1;
	}, [ raceNoStore ]);
	const state02 = useMemo(() => {
		if (!state01) return;

		return state01;
	}, [ state01 ]);
	const state03 = useMemo(() => {
		if (!state02) return;

		return state02;
	}, [ state02 ]);
	const state04 = useMemo(() => {
		if (!state03) return;

		return state03;
	}, [ state03 ]);
	const state05 = useMemo(() => {
		if (!state04) return;

		return state04;
	}, [ state04 ]);
	const state06 = useMemo(() => {
		if (!state05) return;

		return state05;
	}, [ state05 ]);
	const state07 = useMemo(() => {
		if (!state06) return;

		return state06;
	}, [ state06 ]);
	const state08 = useMemo(() => {
		if (!state07) return;

		return state07;
	}, [ state07 ]);
	const state09 = useMemo(() => {
		if (!state08) return;

		return state08;
	}, [ state08 ]);
	const state10 = useMemo(() => {
		if (!state09) return;

		return state09;
	}, [ state09 ]);
	useMemo(() => {
		if (!state10) return;

		recordFinished('RaceMemoState');
	}, [ state10 ]);

	return null;
}
