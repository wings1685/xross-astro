<script setup lang="ts">
	import { computed, watch } from "vue";
	import { logStore } from "@/_global/lib/performance04";
	import { useStore } from "@/_global/piquo";

	const { vueQuantum08, vueSetQuantum09 } = useStore('vueQuantum');

	const relayData = computed(() => {
		if (!vueQuantum08()) return 0;

		logStore();

		return vueQuantum08();
	});

	watch(
		() => relayData.value,
		() => {
			if (!relayData.value) return;

			vueSetQuantum09(relayData.value);
		},
		{ immediate: true }
	);
</script>
<template>
	<!-- return null -->
</template>
