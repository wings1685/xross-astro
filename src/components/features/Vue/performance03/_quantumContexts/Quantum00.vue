<script setup lang="ts">
	import { watch } from "vue";
	import { useQuantumDataContexts } from "../_models/QuantumContext.vue";
	import { useStore } from "@/_global/piquo";
	import { recordStart } from "@/_global/lib/performance03";

	const { vueQuantumContextStart } = useStore('vueQuantum');
	const { setQuantumData01 } = useQuantumDataContexts();

	watch(
		() => vueQuantumContextStart(),
		() => {
			if (!vueQuantumContextStart()) return;

			recordStart('QuantumContext');
			setQuantumData01(vueQuantumContextStart());
		},
		{ immediate: true }
	);
</script>
<template>
	<!-- return null -->
</template>
