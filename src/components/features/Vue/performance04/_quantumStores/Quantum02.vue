<script setup lang="ts">
	import { computed, watch } from "vue";
	import { logStore } from "@/_global/lib/performance04";
	import { useStore } from "@/_global/piquo";

	const { vueQuantum02, vueSetQuantum03 } = useStore('vueQuantum');

	const relayData = computed(() => {
		if (!vueQuantum02()) return 0;

		logStore();

		return vueQuantum02();
	});

	watch(
		() => relayData.value,
		() => {
			if (!relayData.value) return;

			vueSetQuantum03(relayData.value);
		},
		{ immediate: true }
	);
</script>
<template>
	<!-- return null -->
</template>
