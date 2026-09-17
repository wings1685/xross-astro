import { ref } from "vue";

type RaceId = 'Effect' | 'Props' | 'Context' | 'Memo' | 'Store' | null;
const initialValue: RaceId = null;

export const _vueRaceId = {
	server: {
		vueRaceId: (): RaceId => initialValue,
		vueSetRaceId: (_: RaceId) => {},
	},
	client: () => {
		const vueRaceId = ref<RaceId>(initialValue);
		const vueSetRaceId = (value: RaceId) => { vueRaceId.value = value; };

		return { vueRaceId: () => vueRaceId.value, vueSetRaceId };
	},
};
