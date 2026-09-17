import { createSignal } from "solid-js";

type RaceId = 'Effect' | 'Props' | 'Context' | 'Memo' | 'Store' | null;
const initialValue: RaceId = null;

export const _solidRaceId = {
	server: {
		solidRaceId: (): RaceId => initialValue,
		solidSetRaceId: (_: RaceId) => {},
	},
	client: () => {
		const [ solidRaceId, solidSetRaceId ] = createSignal<RaceId>(initialValue);

		return { solidRaceId, solidSetRaceId };
	},
};
