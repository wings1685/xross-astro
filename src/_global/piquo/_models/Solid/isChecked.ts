import { createSignal } from "solid-js";
import type { StoreIsChecked } from "../types";

const initialValue: StoreIsChecked = false;

export const _solidIsChecked = {
	server: {
		solidIsChecked: (): StoreIsChecked => initialValue,
		solidSetChecked: (_: StoreIsChecked) => {},
	},
	client: () => {
		const [ solidIsChecked, solidSetChecked ] = createSignal<StoreIsChecked>(initialValue);

		return { solidIsChecked, solidSetChecked };
	},
};
