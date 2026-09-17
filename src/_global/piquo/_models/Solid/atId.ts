import { createSignal } from "solid-js";

type AtId = string;
const initialValue: AtId = '';

export const _solidAtId = {
	server: {
		solidAtId: (): AtId => initialValue,
		solidSetAtId: (_: AtId) => {},
	},
	client: () => {
		const [ solidAtId, solidSetAtId ] = createSignal<AtId>(initialValue);

		return { solidAtId, solidSetAtId };
	},
};
