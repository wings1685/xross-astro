import { ref } from "vue";
import type { StoreIsChecked } from "../types";

const initialValue: StoreIsChecked = false;

export const _vueIsChecked = {
	server: {
		vueIsChecked: (): StoreIsChecked => initialValue,
		vueSetChecked: (_: StoreIsChecked) => {},
	},
	client: () => {
		const vueIsChecked = ref<StoreIsChecked>(initialValue);
		const vueSetChecked = (value: StoreIsChecked) => { vueIsChecked.value = value; };

		return { vueIsChecked: () => vueIsChecked.value, vueSetChecked };
	},
};
