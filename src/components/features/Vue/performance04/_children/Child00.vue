<script setup lang="ts">
	import { ref, watchEffect } from "vue";
	import { useStore } from "@/_global/piquo";
	import { recordStart, recordFinished } from "@/_global/lib/performance04";
	import { useRelayDataContexts } from "../_models/RelayContext.vue";
	import { Child01 } from "./";

	const { relayData, setRelayData } = useRelayDataContexts();
	const { vueRaceId, vueSetRaceId } = useStore('vueRaceId');
	const relayStart = ref(0);

	watchEffect(() => {
		if (vueRaceId() !== 'Props' || relayData.value) return;

		recordStart('Props');
		relayStart.value = 1;
	}, { flush: 'pre' });

	watchEffect(() => {
		if (vueRaceId() !== 'Context' || !relayData.value) return;

		recordFinished('Context');
		setRelayData(0);
		relayStart.value = 0;

		vueSetRaceId('Memo');
	}, { flush: 'pre' });
</script>
<template>
	<Child01 :relay="relayStart" />
</template>
