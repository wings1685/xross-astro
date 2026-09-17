<script setup lang="ts">
	import { computed, watch } from "vue";
	import { recordFinished, logStore } from "@/_global/lib/performance04";
	import { useStore } from "@/_global/piquo";

	const { vueQuantum10 } = useStore('vueQuantum');
	const { vueSetRaceId } = useStore('vueRaceId');

	const relayData = computed(() => {
		if (!vueQuantum10()) return 0;

		logStore();

		return vueQuantum10();
	});

	watch(
		() => relayData.value,
		() => {
			if (!relayData.value) return;

			recordFinished('Store');
			recordFinished('Race');
			vueSetRaceId(null);
		}
	);
</script>
<template>
	<!-- return null -->
</template>
