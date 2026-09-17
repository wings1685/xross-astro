<script setup lang="ts">
	import { watch } from "vue";
	import { useQuantumDataContexts } from "../_models/QuantumContext.vue";
	import { loopTotal, recordFinished } from "@/_global/lib/performance03";
	import { useStore } from "@/_global/piquo";

	const { vueSetQuantumContextStart } = useStore('vueQuantum');
	const { setQuantumData01, quantumData10 } = useQuantumDataContexts();

	const incrementContext = (value: number) => {
		setQuantumData01(value + 1);
	};

	watch(
		() => quantumData10.value,
		() => {
			if (!quantumData10.value) return;

			if (quantumData10.value >= loopTotal) {
				recordFinished('QuantumContext');

				vueSetQuantumContextStart(0);
				return;
			}

			incrementContext(quantumData10.value);
		},
		{ immediate: true }
	);
</script>
<template>
	<!-- return null -->
</template>
