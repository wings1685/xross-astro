<script setup lang="ts">
	import { computed, watch } from "vue";
	import { logStore } from "@/_global/lib/performance04";
	import { useStore } from "@/_global/piquo";

	const { vueQuantum04, vueSetQuantum05 } = useStore('vueQuantum');

	const relayData = computed(() => {
		if (!vueQuantum04()) return 0;

		logStore();

		return vueQuantum04();
	});

	watch(
		() => relayData.value,
		() => {
			if (!relayData.value) return;

			vueSetQuantum05(relayData.value);
		},
		{ immediate: true }
	);
</script>
<template>
	<!-- return null -->
</template>
