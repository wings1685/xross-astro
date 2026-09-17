/** @jsxImportSource react */

import { useLayoutEffect, useRef, useState, useSyncExternalStore } from "react";
import { useStore } from "./_models/stores";
import { recordStart, recordFinished, logEffect } from "@/_global/lib/performance04";

export default function Effect() {
	const raceId = useStore('raceId');
	const raceIdStore = useSyncExternalStore(raceId.subscribe, raceId.getSnapshot, raceId.getServerSnapshot);
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

	const num = useRef(0);

	useLayoutEffect(() => {
		if (raceIdStore !== 'Effect') return;

		recordStart('Effect');
		setState01(num.current + 1);
	}, [ raceIdStore ]);
	useLayoutEffect(() => {
		if (!state01) return;

		logEffect();
		setState02(state01);
	}, [ state01 ]);
	useLayoutEffect(() => {
		if (!state02) return;

		logEffect();
		setState03(state02);
	}, [ state02 ]);
	useLayoutEffect(() => {
		if (!state03) return;

		logEffect();
		setState04(state03);
	}, [ state03 ]);
	useLayoutEffect(() => {
		if (!state04) return;

		logEffect();
		setState05(state04);
	}, [ state04 ]);
	useLayoutEffect(() => {
		if (!state05) return;

		logEffect();
		setState06(state05);
	}, [ state05 ]);
	useLayoutEffect(() => {
		if (!state06) return;

		logEffect();
		setState07(state06);
	}, [ state06 ]);
	useLayoutEffect(() => {
		if (!state07) return;

		logEffect();
		setState08(state07);
	}, [ state07 ]);
	useLayoutEffect(() => {
		if (!state08) return;

		logEffect();
		setState09(state08);
	}, [ state08 ]);
	useLayoutEffect(() => {
		if (!state09) return;

		logEffect();
		setState10(state09);
	}, [ state09 ]);
	useLayoutEffect(() => {
		if (!state10) return;

		logEffect();
		recordFinished('Effect');
		num.current++;
		raceId.setStore('Props');
	}, [ state10 ]);

	return null;
}
