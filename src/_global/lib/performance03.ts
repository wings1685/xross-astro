export const records = {
	RelaySetter: {
		start: 0,
		finished: 0,
	},
	RelayContext: {
		start: 0,
		finished: 0,
	},
	RelayStore: {
		start: 0,
		finished: 0,
	},
	RelayBindable: {
		start: 0,
		finished: 0,
	},
	RaceDerivedState: {
		start: 0,
		finished: 0,
	},
	RaceWatchState: {
		start: 0,
		finished: 0,
	},
	RaceComputedState: {
		start: 0,
		finished: 0,
	},
	RaceWatchEffectState: {
		start: 0,
		finished: 0,
	},
	RaceEffectState: {
		start: 0,
		finished: 0,
	},
	RaceMemoState: {
		start: 0,
		finished: 0,
	},
	RaceLayoutEffectState: {
		start: 0,
		finished: 0,
	},
	QuantumContext: {
		start: 0,
		finished: 0,
	},
	QuantumStore: {
		start: 0,
		finished: 0,
	},
};
export type Records = keyof typeof records;
const now = () => performance.now();
export const recordStart = (target: Records) => {
	records[target].start = now();
};
export const recordFinished = (target: Records, name?: string) => {
	if (records[target].start === 0) return;

	records[target].finished = now();
	const diff = records[target].finished - records[target].start;
	console.log(`${name ?? target}: ${diff} ミリ秒`);
};
export const loopTotal = 5;
