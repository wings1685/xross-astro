<script setup lang="ts">
	import { computed, watch } from "vue";
	import { logStore } from "@/_global/lib/performance04";
	import { useStore } from "@/_global/piquo";

	const { vueQuantum06, vueSetQuantum07 } = useStore('vueQuantum');

	const relayData = computed(() => {
		if (!vueQuantum06()) return 0;

		logStore();

		return vueQuantum06();
	});

	watch(
		() => relayData.value,
		() => {
			if (!relayData.value) return;

			vueSetQuantum07(relayData.value);
		},
		{ immediate: true }
	);
</script>
<template>
	<!-- return null -->
</template>
