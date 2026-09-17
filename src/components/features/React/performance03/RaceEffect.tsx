/** @jsxImportSource react */

import { useEffect, useState, useSyncExternalStore } from "react";
import { useStore } from "./_models/stores";
import { recordStart, recordFinished } from "@/_global/lib/performance03";

export default function RaceEffect() {
	const store = useStore('raceNo');
	const raceNoStore = useSyncExternalStore(store.subscribe, store.getSnapshot, store.getServerSnapshot);
	const [ state01, setState01 ] = useState(0);
	const [ state02, setState02 ] = useState(0);
	const [ state03, setState03 ] = useState(0);
	const [ state04, setState04 ] = useState(0);
	const [ state05, setState05 ] = useState(0);
	const [ state06, setState06 ] = useState(0);
	const [ state07, setState07 ] = useState(0);
	const [ state08, setState08 ] = useState(0);
	const [ state09, setState09 ] = useState(0);
	const [ state10, setState10 ] = useState(0);

	useEffect(() => {
		if (!raceNoStore) return;

		recordStart('RaceEffectState');
		setState01(prev => prev + 1);
	}, [ raceNoStore ]);
	useEffect(() => {
		if (!state01) return;

		setState02(prev => prev + 1);
	}, [ state01 ]);
	useEffect(() => {
		if (!state02) return;

		setState03(prev => prev + 1);
	}, [ state02 ]);
	useEffect(() => {
		if (!state03) return;

		setState04(prev => prev + 1);
	}, [ state03 ]);
	useEffect(() => {
		if (!state04) return;

		setState05(prev => prev + 1);
	}, [ state04 ]);
	useEffect(() => {
		if (!state05) return;

		setState06(prev => prev + 1);
	}, [ state05 ]);
	useEffect(() => {
		if (!state06) return;

		setState07(prev => prev + 1);
	}, [ state06 ]);
	useEffect(() => {
		if (!state07) return;

		setState08(prev => prev + 1);
	}, [ state07 ]);
	useEffect(() => {
		if (!state08) return;

		setState09(prev => prev + 1);
	}, [ state08 ]);
	useEffect(() => {
		if (!state09) return;

		setState10(prev => prev + 1);
	}, [ state09 ]);
	useEffect(() => {
		if (!state10) return;

		recordFinished('RaceEffectState');
	}, [ state10 ]);

	return null;
}
