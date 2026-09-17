import { ref } from "vue";

type Relay = number;
const initialValue: Relay = 0;

export const _vueRelay = {
	server: {
		vueRelay: (): Relay => initialValue,
		vueSetRelay: (_: Relay) => {},
	},
	client: () => {
		const vueRelay = ref<Relay>(initialValue);
		const vueSetRelay = (value: Relay) => { vueRelay.value = value; };

		return { vueRelay: () => vueRelay.value, vueSetRelay };
	},
};
