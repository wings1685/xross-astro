export const records = {
	uSES: {
		start: 0,
		finished: 0,
	},
	Zustand: {
		start: 0,
		finished: 0,
	},
	Jotai: {
		start: 0,
		finished: 0,
	},
	Valtio: {
		start: 0,
		finished: 0,
	},
	LegendState: {
		start: 0,
		finished: 0,
	},
	Redux: {
		start: 0,
		finished: 0,
	},
	NanoStores: {
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
