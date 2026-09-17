import { syncQuery } from "../../sync";
import type { StoreQuery } from "../types";

const initialValue: StoreQuery = 'aaa';

export const _svelteQuery = {
	server: {
		svelteQuery: (): StoreQuery => initialValue,
		svelteSetQuery: (_: StoreQuery) => {},
	},
	client: () => {
		let svelteQuery = $state<StoreQuery>(initialValue);
		const svelteSetQuery = (value: StoreQuery) => { svelteQuery = value; };

		return { svelteQuery: () => svelteQuery, svelteSetQuery };
	},
};
