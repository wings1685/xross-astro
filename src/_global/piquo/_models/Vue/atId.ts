import { ref } from "vue";

type AtId = string;
const initialValue: AtId = '';

export const _vueAtId = {
	server: {
		vueAtId: (): AtId => initialValue,
		vueSetAtId: (_: AtId) => {},
	},
	client: () => {
		const vueAtId = ref<AtId>(initialValue);
		const vueSetAtId = (value: AtId) => { vueAtId.value = value; };

		return { vueAtId: () => vueAtId.value, vueSetAtId };
	},
};
