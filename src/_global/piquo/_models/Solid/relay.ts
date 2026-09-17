import { createSignal } from "solid-js";

type Relay = number;
const initialValue: Relay = 0;

export const _solidRelay = {
	server: {
		solidRelay: (): Relay => initialValue,
		solidSetRelay: (_: Relay) => {},
	},
	client: () => {
		const [ solidRelay, solidSetRelay ] = createSignal<Relay>(initialValue);

		return { solidRelay, solidSetRelay };
	},
};
