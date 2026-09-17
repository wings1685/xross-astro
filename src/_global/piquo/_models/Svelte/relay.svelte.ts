type Relay = number;
const initialValue: Relay = 0;

export const _svelteRelay = {
	server: {
		svelteRelay: (): Relay => initialValue,
		svelteSetRelay: (_: Relay) => {},
	},
	client: () => {
		let svelteRelay = $state<Relay>(initialValue);
		const svelteSetRelay = (value: Relay) => { svelteRelay = value; };

		return { svelteRelay: () => svelteRelay, svelteSetRelay };
	},
};
