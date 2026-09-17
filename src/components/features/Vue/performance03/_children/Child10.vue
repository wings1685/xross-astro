<script setup lang="ts">
	import { useStore } from "@/_global/piquo";
	import { recordStart } from "@/_global/lib/performance03";
	import { useRelayDataContexts } from "../_models/RelayContext.vue";
	import type { RelayProps } from "../_models/types.ts";

	const props = defineProps<RelayProps>();

	const { relayData, setRelayData } = useRelayDataContexts();
	const { vueSetRelay } = useStore('vueRelay');

	const handleChange = async () => {
		const start = relayData.value + 1;

		recordStart('RelaySetter');
		props.setRelay(start);

		recordStart('RelayContext');
		setRelayData(start);

		recordStart('RelayStore');
		vueSetRelay(start);
	};
</script>
<template>
	<fieldset>
		<input type="number" @change="handleChange" :value="props.relay">
	</fieldset>
</template>
