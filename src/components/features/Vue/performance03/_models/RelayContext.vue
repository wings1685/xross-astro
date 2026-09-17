<script lang="ts">
	import { ref, defineComponent, provide, inject, readonly } from "vue";
	import type { InjectionKey, PropType, Ref } from "vue";

	type RelayData = number;
	const initialValue: RelayData = 0;
	type RelayDataRef = Ref<RelayData>;
	const RelayDataSymbol: InjectionKey<RelayDataRef> = Symbol();

	const provideRelayData = (value: RelayDataRef) => {
		provide(RelayDataSymbol, value);
	};

	export const useRelayDataContexts = () => {
		const injected = inject(RelayDataSymbol);
		if (!injected) {
			return {
				relayData: readonly({ value: initialValue }),
				setRelayData: (_: RelayData) => {},
			}
		};

		const relayData = readonly(injected);
		const setRelayData = (value: RelayData) => { injected.value = value; };

		return { relayData, setRelayData };
	};
	export type RelayProps = {
		relay: ReturnType<typeof useRelayDataContexts>['relayData'];
	};
	export default defineComponent({
		name: 'Relay',
		props: {
			relay: {
				type: Number as PropType<RelayData>,
				default: initialValue,
			},
		},
		setup(props) {
			provideRelayData(ref(props.relay));
		}
	});
</script>
<template>
	<slot />
</template>
