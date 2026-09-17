<script setup lang="ts">
	import { computed, watch } from "vue";
	import { logStore } from "@/_global/lib/performance04";
	import { useStore } from "@/_global/piquo";

	const { vueQuantum01, vueSetQuantum02 } = useStore('vueQuantum');

	const relayData = computed(() => {
		if (!vueQuantum01()) return 0;

		logStore();

		return vueQuantum01();
	});

	watch(
		() => relayData.value,
		() => {
			if (!relayData.value) return;

			vueSetQuantum02(relayData.value);
		},
		{ immediate: true }
	);
</script>
<template>
	<!-- return null -->
</template>
