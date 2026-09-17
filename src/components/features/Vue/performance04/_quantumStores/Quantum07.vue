<script setup lang="ts">
	import { computed, watch } from "vue";
	import { logStore } from "@/_global/lib/performance04";
	import { useStore } from "@/_global/piquo";

	const { vueQuantum07, vueSetQuantum08 } = useStore('vueQuantum');

	const relayData = computed(() => {
		if (!vueQuantum07()) return 0;

		logStore();

		return vueQuantum07();
	});

	watch(
		() => relayData.value,
		() => {
			if (!relayData.value) return;

			vueSetQuantum08(relayData.value);
		},
		{ immediate: true }
	);
</script>
<template>
	<!-- return null -->
</template>
