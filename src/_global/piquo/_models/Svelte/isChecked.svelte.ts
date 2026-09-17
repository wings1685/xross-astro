import type { StoreIsChecked } from "../types";

const initialValue: StoreIsChecked = false;

export const _svelteIsChecked = {
	server: {
		svelteIsChecked: (): StoreIsChecked => initialValue,
		svelteSetChecked: (_: StoreIsChecked) => {},
	},
	client: () => {
		let svelteIsChecked = $state<StoreIsChecked>(initialValue);
		const svelteSetChecked = (value: StoreIsChecked) => { svelteIsChecked = value; };

		return { svelteIsChecked: () => svelteIsChecked, svelteSetChecked };
	},
};
