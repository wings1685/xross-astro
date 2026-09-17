import { createSignal } from "solid-js";
import type { StoreQuery } from "../types";

const initialValue: StoreQuery = 'aaa';

export const _solidQuery = {
	server: {
		solidQuery: (): StoreQuery => initialValue,
		solidSetQuery: (_: StoreQuery) => {},
	},
	client: () => {
		const [ solidQuery, solidSetQuery ] = createSignal<StoreQuery>(initialValue);

		return { solidQuery, solidSetQuery };
	},
};
