<script setup lang="ts">
	import { watch } from "vue";
	import { useStore } from "@/_global/piquo";
	import { recordStart } from "@/_global/lib/performance04";

	const { vueRaceId } = useStore('vueRaceId');
	const { vueSetQuantum01 } = useStore('vueQuantum');

	let num = 0;

	watch(
		() => vueRaceId(),
		() => {
			if (vueRaceId() !== 'Store') return;

			recordStart('Store');
			vueSetQuantum01(num + 1);
			num++;
		}
	);
</script>
<template>
	<!-- return null -->
</template>
