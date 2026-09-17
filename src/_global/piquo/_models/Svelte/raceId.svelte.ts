type RaceId = 'Effect' | 'Props' | 'Context' | 'Memo' | 'Store' | null;
const initialValue: RaceId = null;

export const _svelteRaceId = {
	server: {
		svelteRaceId: (): RaceId => initialValue,
		svelteSetRaceId: (_: RaceId) => {},
	},
	client: () => {
		let svelteRaceId = $state<RaceId>(initialValue);
		const svelteSetRaceId = (value: RaceId) => { svelteRaceId = value; };

		return { svelteRaceId: () => svelteRaceId, svelteSetRaceId };
	},
};
