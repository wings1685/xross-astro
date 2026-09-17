<script setup lang="ts">
	import { computed } from "vue";
	import { logProps } from "@/_global/lib/performance04.ts";
	import { Child10 } from "./index.ts";
	import type { RelayProps } from "../_models/RelayContext.vue";

	const props = defineProps<RelayProps>();

	const relayData = computed(() => {
		if (!props.relay) return 0;

		logProps();

		return props.relay;
	});
</script>
<template>
	<Child10 :relay="relayData" />
</template>
