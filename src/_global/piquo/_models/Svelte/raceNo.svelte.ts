type RaceNo = number;
const initialValue: RaceNo = 0;

export const _svelteRaceNo = {
	server: {
		svelteRaceNo: (): RaceNo => initialValue,
		svelteSetRaceNo: (_: RaceNo) => {},
	},
	client: () => {
		let svelteRaceNo = $state<RaceNo>(initialValue);
		const svelteSetRaceNo = (value: RaceNo) => { svelteRaceNo = value; };

		return { svelteRaceNo: () => svelteRaceNo, svelteSetRaceNo };
	},
};
