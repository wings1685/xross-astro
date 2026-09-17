<script setup lang="ts">
	import { watch } from "vue";
	import { useStore } from "@/_global/piquo";
	import { recordFinished } from "@/_global/lib/performance02";
	import { useRelayDataContexts } from "../_models/RelayContext.vue";
	import type { RelayProps } from "../_models/RelayContext.vue";

	const props = defineProps<RelayProps>();

	const { relayData } = useRelayDataContexts();
	const { vueRelay } = useStore('vueRelay');

	watch(
		() => props.relay,
		() => {
			if (!props.relay) return;

			recordFinished('RelayProps');
		},
		{ immediate: true }
	);

	watch(
		() => relayData.value,
		() => {
			if (!relayData.value) return;

			recordFinished('RelayContext');
		},
		{ immediate: true }
	);

	watch(
		() => vueRelay(),
		() => {
			if (!vueRelay()) return;

			recordFinished('RelayStore');
		},
		{ immediate: true }
	);
</script>
<template>
	<!-- return null -->
	<!-- <p>{{ props.relay }}</p>
	<p>{{ props.relay }}</p>
	<p>{{ props.relay }}</p>
	<p>{{ props.relay }}</p>
	<p>{{ props.relay }}</p>
	<p>{{ props.relay }}</p>
	<p>{{ props.relay }}</p>
	<p>{{ props.relay }}</p>
	<p>{{ props.relay }}</p>
	<p>{{ props.relay }}</p> -->
</template>
