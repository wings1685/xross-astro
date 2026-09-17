export const records = {
	SolidSignal: { start: 0, finished: 0 },
	SolidSignalNumber: { start: 0, finished: 0 },
	SolidSignalString: { start: 0, finished: 0 },

	SolidNano: { start: 0, finished: 0 },
	SolidNanoNumber: { start: 0, finished: 0 },
	SolidNanoString: { start: 0, finished: 0 },

	SvelteRunes: { start: 0, finished: 0 },
	SvelteRunesNumber: { start: 0, finished: 0 },
	SvelteRunesString: { start: 0, finished: 0 },

	SvelteNano: { start: 0, finished: 0 },
	SvelteNanoNumber: { start: 0, finished: 0 },
	SvelteNanoString: { start: 0, finished: 0 },

	VueRef: { start: 0, finished: 0 },
	VueRefNumber: { start: 0, finished: 0 },
	VueRefString: { start: 0, finished: 0 },

	VueNano: { start: 0, finished: 0 },
	VueNanoNumber: { start: 0, finished: 0 },
	VueNanoString: { start: 0, finished: 0 },

	ReactUses: { start: 0, finished: 0 },
	ReactUsesNumber: { start: 0, finished: 0 },
	ReactUsesString: { start: 0, finished: 0 },

	ReactJotai: { start: 0, finished: 0 },
	ReactJotaiNumber: { start: 0, finished: 0 },
	ReactJotaiString: { start: 0, finished: 0 },

	ReactLegend: { start: 0, finished: 0 },
	ReactLegendNumber: { start: 0, finished: 0 },
	ReactLegendString: { start: 0, finished: 0 },

	ReactValtio: { start: 0, finished: 0 },
	ReactValtioNumber: { start: 0, finished: 0 },
	ReactValtioString: { start: 0, finished: 0 },

	ReactZustand: { start: 0, finished: 0 },
	ReactZustandNumber: { start: 0, finished: 0 },
	ReactZustandString: { start: 0, finished: 0 },

	ReactNano: { start: 0, finished: 0 },
	ReactNanoNumber: { start: 0, finished: 0 },
	ReactNanoString: { start: 0, finished: 0 },
};
export type Records = keyof typeof records;
const now = () => performance.now();
export const recordStart = (target: Records) => {
	records[target].start = now();
};
export const recordFinished = (target: Records) => {
	if (records[target].start === 0) return;

	records[target].finished = now();
};
export const logTotal = (target: Records) => {
	const targetNumber = `${target}Number` as Records;
	const targetString = `${target}String` as Records;
	if (records[targetNumber].start === 0) return;

	const diffNumber = records[targetNumber].finished - records[targetNumber].start;
	const diffString = records[targetString].finished - records[targetString].start;
	console.log(`${targetNumber}: ${diffNumber} ミリ秒`);
	console.log(`${targetString}: ${diffString} ミリ秒`);
	console.log(`${target}: ${diffNumber + diffString} ミリ秒`);};
export const dragRaceMax = 50;
