<script setup lang="ts">
	import { computed, watch, watchEffect } from "vue";
	import { useStore } from "@/_global/piquo";
	import { recordStart, recordFinished, logProps } from "@/_global/lib/performance04";
	import { useRelayDataContexts } from "../_models/RelayContext.vue";
	import type { RelayProps } from "../_models/RelayContext.vue";

	const props = defineProps<RelayProps>();

	const relayData = computed(() => {
		if (!props.relay) return 0;

		logProps();

		return props.relay;
	});

	const { vueRaceId, vueSetRaceId } = useStore('vueRaceId');
	const { setRelayDataWithLog } = useRelayDataContexts();

	watchEffect(() => {
		if (vueRaceId() !== 'Props' || !relayData.value) return;

		recordFinished('Props');

		vueSetRaceId('Context');
		recordStart('Context');
		setRelayDataWithLog(1);
	}, { flush: 'pre' });
</script>
<template>
	<!-- return null -->
</template>
