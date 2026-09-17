<script setup lang="ts">
	import { computed, watch } from "vue";
	import { logStore } from "@/_global/lib/performance04";
	import { useStore } from "@/_global/piquo";

	const { vueQuantum05, vueSetQuantum06 } = useStore('vueQuantum');

	const relayData = computed(() => {
		if (!vueQuantum05()) return 0;

		logStore();

		return vueQuantum05();
	});

	watch(
		() => relayData.value,
		() => {
			if (!relayData.value) return;

			vueSetQuantum06(relayData.value);
		},
		{ immediate: true }
	);
</script>
<template>
	<!-- return null -->
</template>
