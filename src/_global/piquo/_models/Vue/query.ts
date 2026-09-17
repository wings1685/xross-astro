import { ref } from "vue";
import type { StoreQuery } from "../types";

const initialValue: StoreQuery = 'aaa';

export const _vueQuery = {
	server: {
		vueQuery: (): StoreQuery => initialValue,
		vueSetQuery: (_: StoreQuery) => {},
	},
	client: () => {
		const vueQuery = ref<StoreQuery>(initialValue);
		const vueSetQuery = (value: StoreQuery) => { vueQuery.value = value; };

		return { vueQuery: () => vueQuery.value, vueSetQuery };
	},
};
