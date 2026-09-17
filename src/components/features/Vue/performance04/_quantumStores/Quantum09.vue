<script setup lang="ts">
	import { computed, watch } from "vue";
	import { logStore } from "@/_global/lib/performance04";
	import { useStore } from "@/_global/piquo";

	const { vueQuantum09, vueSetQuantum10 } = useStore('vueQuantum');

	const relayData = computed(() => {
		if (!vueQuantum09()) return 0;

		logStore();

		return vueQuantum09();
	});

	watch(
		() => relayData.value,
		() => {
			if (!relayData.value) return;

			vueSetQuantum10(relayData.value);
		},
		{ immediate: true }
	);
</script>
<template>
	<!-- return null -->
</template>
