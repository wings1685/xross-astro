type AtId = string;
const initialValue: AtId = '';

export const _svelteAtId = {
	server: {
		svelteAtId: (): AtId => initialValue,
		svelteSetAtId: (_: AtId) => {},
	},
	client: () => {
		let svelteAtId = $state<AtId>(initialValue);
		const svelteSetAtId = (value: AtId) => { svelteAtId = value; };

		return { svelteAtId: () => svelteAtId, svelteSetAtId };
	},
};
