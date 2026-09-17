<script setup lang="ts">
	import { computed, watch } from "vue";
	import { logStore } from "@/_global/lib/performance04";
	import { useStore } from "@/_global/piquo";

	const { vueQuantum03, vueSetQuantum04 } = useStore('vueQuantum');

	const relayData = computed(() => {
		if (!vueQuantum03()) return 0;

		logStore();

		return vueQuantum03();
	});

	watch(
		() => relayData.value,
		() => {
			if (!relayData.value) return;

			vueSetQuantum04(relayData.value);
		},
		{ immediate: true }
	);
</script>
<template>
	<!-- return null -->
</template>
