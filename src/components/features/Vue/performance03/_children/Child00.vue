<script setup lang="ts">
	import { ref, watch } from "vue";
	import { recordFinished } from "@/_global/lib/performance03";
	import { useRelayDataContexts } from "../_models/RelayContext.vue";
	import { useStore } from "@/_global/piquo";
	import { Child01 } from "./index.ts";
	import type { RelayData, RelaySetter } from "../_models/types.ts";

	const { relayData } = useRelayDataContexts();
	const { vueRelay } = useStore('vueRelay');
	let relay = ref(0);
	const setRelay: RelaySetter = (value: RelayData) => { relay.value = value; };

	watch(
		() => relay.value,
		() => {
			if (!relay.value) return;

			recordFinished('RelaySetter');
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
	<Child01 :relay="relay" :set-relay="setRelay" />
</template>
