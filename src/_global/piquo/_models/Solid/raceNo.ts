import { createSignal } from "solid-js";

type RaceNo = number;
const initialValue: RaceNo = 0;

export const _solidRaceNo = {
	server: {
		solidRaceNo: (): RaceNo => initialValue,
		solidSetRaceNo: (_: RaceNo) => {},
	},
	client: () => {
		const [ solidRaceNo, solidSetRaceNo ] = createSignal<RaceNo>(initialValue);

		return { solidRaceNo, solidSetRaceNo };
	},
};
