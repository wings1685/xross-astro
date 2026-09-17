import { useStore } from "./";
import type { AllStoreKeys } from "./_models";
import type { StoreQuery } from "./_models/types";

export const syncQuery = (value: StoreQuery, exclude?: AllStoreKeys) => {
	const { solidSetQuery } = useStore('solidQuery');
	const { svelteSetQuery } = useStore('svelteQuery');
	const { vueSetQuery } = useStore('vueQuery');

	if (exclude !== 'solidQuery') solidSetQuery(value);
	if (exclude !== 'svelteQuery') svelteSetQuery(value);
	if (exclude !== 'vueQuery') vueSetQuery(value);
};
