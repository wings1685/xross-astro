import { ref } from "vue";

type RaceNo = number;
const initialValue: RaceNo = 0;

export const _vueRaceNo = {
	server: {
		vueRaceNo: (): RaceNo => initialValue,
		vueSetRaceNo: (_: RaceNo) => {},
	},
	client: () => {
		const vueRaceNo = ref<RaceNo>(initialValue);
		const vueSetRaceNo = (value: RaceNo) => { vueRaceNo.value = value; };

		return { vueRaceNo: () => vueRaceNo.value, vueSetRaceNo };
	},
};
